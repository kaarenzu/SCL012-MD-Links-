# Markdown Links

## Índice

* [1. ¿Qué es Markdown Links?](#1-¿Qué-es-Markdown-Links?)
* [2. Diagrama de flujo](#2-Diagrama-de-flujo)
* [3. Contenido de cada Módulo](#3-Contenido-de-cada-Módulo)
* [4. Intrucciones de instalacion /uso ](#4-Intrucciones-de-instalación-/uso)
* [5. Ejemplos](#5-Ejemplos)


***

## 1. ¿Qué es Markdown Links?
Markdown Links es una librería de Node.js que nos permite buscar en un directorio todos los archivos en formato [Markdown](https://es.wikipedia.org/wiki/Markdown) que en su interior contengan link y asi poder validar el estado actual de cada uno de ellos 

## 2. Diagrama de flujo
Este fue el diagrama de flujo para poder resolver este proyecto 
![Diagrama](imagen\diagrama.png)


## 3. Contenido de cada modulo 
* `direct-arch.js` Muestra [true]() si es efectivamente un directorio lo ingresado.
* `readDir.js`: Muestra todos los archivos en formato [Markdown](https://es.wikipedia.org/wiki/Markdown) que existen en el directorio ingresado .
* `readFile.js`: Lee todos los archivos .md y nos muestra cuantos link tiene cada uno.
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu inplementación debe pasar estos tets.


## 4. Intrucciones de instalación /uso



## 5. Ejemplos

![directfile](imagen\directfile.png)

