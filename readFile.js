let fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
let leerArchivos = data.split('link').length -1;

console.log(leerArchivos);
})