const fs = require('fs');
const path = require('path');
const processArgv = process.argv[2];
const pathAbsolute = path.resolve(processArgv); 
// const MarkdownIt = require('markdown-it'),
//     md = new MarkdownIt();
// const result = md.render('# markdown-it!');



fs.readFile(pathAbsolute, 'utf8', function (err, data) {
let leerArchivos = data.split(result).length -1;

console.log(leerArchivos);
})