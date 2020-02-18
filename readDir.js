const path = require('path');
const processArgv = process.argv[2];
const pathAbsolute = path.resolve(processArgv); // Ruta absoluta
const fs = require('fs');
console.log (pathAbsolute);
// console.log(processArgv);


// Lee el directorio si tienes archivos .md y que los muestre 
function readDir(){
  fs.readdir(pathAbsolute , function(err, archivos){ 
    archivos
    .filter(function(archivo){ return path.extname(archivo) ==='.' + 'md' })
   .forEach(function(archivo){
    console.log(archivo);
   })
  });  
}
readDir();

