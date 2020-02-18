let fs = require('fs');
let markdownLink = require('markdown-link-extractor');

const markdown = fs.readFileSync('ReadmeDos.md').toString();
const links = markdownLink(markdown);
links.forEach(function(link){
  console.log(link);
})