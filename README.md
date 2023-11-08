# JavaScript-Total-Dia-12
En esta ocasión subo el ejercicio del día 12 del curso "JavaScript Total" que estoy tomando en Udemy. 
Esta primera vez solo satisfago los requisitos para la resolución del ejercicio, pienso retomarlo al terminar el curso para brindar una solución más estética y/o elaborada nun/✨

### Consigna
Para poner en práctica los distintos eventos que hemos visto durante el día de hoy, vamos a desarrollar un buscador de películas y series. 
Tu le darás el estilo y organización que quieras, pero estos son los elementos que no pueden faltar:

* Un selector para que el usuario elija películas o series,
* Un input para que escriba el título, o el comienzo del nombre de un título,
* Un botón buscar, para que se inicie la búsqueda
* Y una lista, que aunque no se vea al comienzo, está allí para desplegar todos los hallazgos luego de hacer la búsqueda.
	
Nuestro buscador tendrá como fuente de datos, a dos archivos JSON (uno con información de películas y 
otro con información de series). Cada archivo esta formado por un array de elementos que contienen 
5 nombres de películas o series, cada uno con su sinopsis. Por supuesto que te dejo 
ambos archivos para que te los descargues en los materiales adjuntos de esta lección.

Presta atención a la consigna porque hay mucho para hacer. 

Tu buscador debe contar con lo siguiente:

1. El elemento select, servirá para establecer cuál va a ser el archivo JSON que se va a utilizar como fuente de la búsqueda. 
 
2. Un escuchador de eventos debe prestar atención al evento change de select, para cuando se modifique el archivo seleccionado. 
Te recomienda declarar un variable en el script que sirva para almacenar el nombre del archivo seleccionado.

3. Declara un evento personalizado que se desencadene al modificar el archivo base, 
y cuya función asociada deberá mostrar en un alert un texto que diga algo como: "El archivo de base ahora es… [nombre del archivo]".

4. El input solo puede permitir que ingresemos letras, la tecla espacio y la tecla borrar, 
por lo tanto debe vigilar al evento keydown, evitando que las demás teclas (números y signos) ejecuten su acción por defecto (que es imprimirse en pantalla). 
	
 5. El botón debe vigilar el evento click, que es el encargado de iniciar la búsqueda.
	
 6. Para mostrar la lista, como te dije, tu página HTML debe tener preparada una etiqueta <ul> donde mostraremos el resultado de la búsqueda.
	
 7. Ahora, la función que va a realizar la búsqueda deberá:
		
  1. Obtener los datos del archivo JSON con cualquiera de las técnicas que has aprendido. 
		
  2. Con los datos obtenidos, debemos recorrer el array y verificar si coincide el nombre de cada elemento con nuestra búsqueda. 
Recuerda que las coincidencias pueden ser totales (si el usuario escribió el titulo completo) o parciales 
(si el usuario escribió el comienzo del título). Para chequear esto último puedes usar el método startsWith() 
de los strings, qué básicamente en inglés significa "Comienza con". Además para evitar confusiones con el uso de mayúsculas y minúsculas, 
hemos escrito los títulos del archivo JSON con mayúsculas, y tu código puede pasar el string ingresado por el usuario a mayúsculas 
con el método toUpperCase() antes de ejecutar la búsqueda.
		
  3. En cada vuelta del ciclo, donde iteraremos uno a uno por todos los items del JSON, debemos verificar que la propiedad "nombre" 
de los datos del JSON coincida con parte del contenido del input donde el usuario ingresara un string a buscar. 
		
  4. Si hay coincidencia, debemos crear una etiqueta <p> donde almacenaremos la sinopsis del elemento y 
luego una etiqueta <li> donde almacenaremos el nombre. La etiqueta <p> se adjuntará al elemento <li>, 
mientras que este ultimo se adjuntará al elemento <ul> que ya hemos definido en nuestro HTML.
		
  5. Por último, la frutilla del postre, vamos a declarar dos eventos para el elemento <li>. 
Serán los eventos mouseover y mouseout para lograr que la sinopsis solo sea visible cuando el usuario posiciones 
el mouse sobre el título encontrado, y que deje de ser visible cuando el mouse se retira.

### Pantallas de la aplicación

### Pantalla inicial
![scr1](https://github.com/Alejandro-Az/JavaScript-Total-Dia-12/assets/105530752/2d27f2e4-aad4-4a51-9579-275f221ff042)

### Seleccionar peliculas
![peliculas](https://github.com/Alejandro-Az/JavaScript-Total-Dia-12/assets/105530752/e716f595-69b0-477a-8fd5-b327cd62d60d)

### Seleccionar series
![series](https://github.com/Alejandro-Az/JavaScript-Total-Dia-12/assets/105530752/2270584a-6037-41c7-9c05-2e2dcda651b4)

### Busqueda parcial
![busquedaParcial](https://github.com/Alejandro-Az/JavaScript-Total-Dia-12/assets/105530752/510fa6d8-8426-4ad9-8996-f2ef0539e7b9)
![busquedaParcial2](https://github.com/Alejandro-Az/JavaScript-Total-Dia-12/assets/105530752/25ec114f-529c-4a22-917c-0d4bd4849d84)

### Mostrar sinopsis cuando pasas el ratón por encima 
![sinopsis](https://github.com/Alejandro-Az/JavaScript-Total-Dia-12/assets/105530752/22554a9d-babf-435d-bf16-4ddc4bfc71e6)




