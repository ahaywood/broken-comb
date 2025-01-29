import { format, parse, lastDayOfMonth } from 'date-fns';
import fs from 'fs';
import path from 'path';


export default function plopfile(plop) {
  plop.setHelper('toUpperCase', (txt) => txt.toUpperCase());

  plop.setHelper('lastDayOfMonth', (month) => {
    const date = parse(`2025-${month}-01`, 'yyyy-M-dd', new Date());
    return format(lastDayOfMonth(date), 'd');
  });

  plop.setHelper('leadingZero', (myNumber) => {
    return myNumber < 10 ? `0${myNumber}` : myNumber;
  });

  plop.setHelper('fullMonthName', (month) => {
    return format(parse(`2025-${month}-01`, 'yyyy-M-dd', new Date()), 'MMMM');
  });

  plop.setGenerator('issue', {
    description: 'stubs out a new issue',
    prompts: [
      {
        type: 'input',
        name: 'publishDate',
        message: 'yyyy-mm-dd format',
        default: format(new Date(), 'yyyy-MM-dd')
      }, {
        type: 'input',
        name: 'title',
        message: 'Title'
      }, {
        type: 'input',
        name: 'slug',
        message: 'Slug',
        default: (data) => {
          return `${data.publishDate}-${plop.getHelper('kebabCase')(data.title)}`;
        }
      }, {
        type: 'confirm',
        name: 'published',
        message: 'Published?'
      }, {
        type: 'input',
        name: 'issue',
        message: 'Issue Number',
        default: () => {
          const issuesPath = path.join(process.cwd(), 'src/content/issues');

          try {
            const folders = fs.readdirSync(issuesPath).filter(file =>
              fs.statSync(path.join(issuesPath, file)).isDirectory()
            );
            return folders.length + 1;
          } catch (e) {
            return 1; // Default to 1 if directory doesn't exist
          }
        }
      }],
    actions: [{
      type: 'add',
      path: 'src/content/issues/{{slug}}/{{slug}}.mdx',
      templateFile: 'plop-templates/issue/index.mdx.hbs',
      skipIfExists: true,
      transform: (content, data) => {
        // Ensure publishDate is a string
        const publishDate = data.publishDate.toString();
        return content.replace('{{publishDate}}', publishDate);
      },
      prettierOptions: {
        parser: 'mdx',
        preserveWhitespace: true
      }
    }]  // array of actions
  });
};