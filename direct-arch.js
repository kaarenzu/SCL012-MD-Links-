const fs = require('fs');
const path = require('path');
let processArgv = process.argv[2];
//let probando = process.argv[3];
let pathAbsolute = path.resolve(processArgv); 
// let probar = stats.isDirectory();
function probar(){
  fs.stat(pathAbsolute, (err, stats) => {
    if (stats.isDirectory()) {
     console.log(stats.isDirectory())
    }

   });

}
probar();

