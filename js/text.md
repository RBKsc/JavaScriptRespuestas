Para individualizar elementos y poder seleccionarlos en JavaScript para manipular el DOM, se han añadido atributos de datos (data-attributes).

Después de seleccionar estos elementos con querySelector, nos gustaría insertar código HTML dentro de ellos. Para ello, hemos creado la función construyeCard() y utilizamos innerHTML para asignarle un fragmento de código en forma de cadena con la ayuda de las template strings para hacerlo dinámico.

Con el objetivo de hacer el código más legible y separar funciones y archivos de acuerdo con su responsabilidad en el proyecto, utilizamos import y export para aprovechar funciones de otros archivos, como la función listarVideos() que se encuentra en el archivo conectaApi.js

Para aplicar la función construyeCard() a cada uno de los elementos que se obtuvieron de la lista de videos del servidor, utilizamos el método forEach (método que se aborda en el curso "JavaScript: métodos de array"). Dentro de él, se construyó una función con una sintaxis diferente, utilizando =>, que se asemeja a una flecha. Y no es solo una similitud: el nombre de este tipo de función es función de flecha en inglés (arrow function).