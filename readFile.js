const fs = require('fs');
const path = require('path');
const processArgv = process.argv[2];
const markdownLink = require('markdown-link-extractor');
const pathAbsolute = path.resolve(processArgv);


exports.readFile = (pathAbsolute) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathAbsolute, 'utf8', (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  })
} 

exports.readFile(pathAbsolute)
  .then(data => console.log(markdownLink(data)))
  .catch(error => console.log('aca hay un fail ' + error));


