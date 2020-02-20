const fs = require('fs');
const path = require('path');
const processArgv = process.argv[2];
const markdownLink = require('markdown-link-extractor');
const pathAbsolute = path.resolve(processArgv);


const linkFile = (pathAbsolute) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathAbsolute, 'utf8', (error, data) => {
      if (error) return reject(error);
      return resolve(markdownLink(data));
    })
  })
} 

linkFile(pathAbsolute)
  .then(data => console.log(data))
  .catch(error => console.log(error));


