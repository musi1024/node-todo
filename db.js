const fs = require('fs');
const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const path = require('path');
const dbPath = path.join(home, '.todo');

const db = {
  read(path = dbPath) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { flag: 'a+' }, (error, data) => {
        if (error) return reject(error);
        let list;
        try {
          list = JSON.parse(data.toString());
        } catch (err) {
          list = [];
        }
        resolve(list);
      });
    });
  },
  write(list, path = dbPath) {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, JSON.stringify(list) + '\n', error => {
        if (error) return reject(error);
        resolve();
      });
    });
  }
};

module.exports = db;
