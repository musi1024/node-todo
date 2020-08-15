#!/usr/bin/env node

const program = require('commander');
const api = require('./index.js');

// program.option('-d, --debug', 'output extra debugging');

program
  .command('add')
  .description('add a task')
  .action(a => {
    const tasks = a.args.join(' ');
    api
      .add(tasks)
      .then(() => console.log('add a task success'))
      .catch(() => console.log('add a task fail'));
  });

program
  .command('clear')
  .description('clear all task')
  .action(() =>
    api
      .clear()
      .then(() => console.log('clear all task success'))
      .catch(() => console.log('clear all task fail'))
  );

if (process.argv.length === 2) {
  api.showAll();
} else {
  program.parse(process.argv);
}
