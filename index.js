
// module.exports = () => {

// };

let path = require('path');
let processArgv = process.argv[2];
let pathAbsolute = path.resolve(processArgv); // Ruta absoluta
let fs = require('fs');
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
