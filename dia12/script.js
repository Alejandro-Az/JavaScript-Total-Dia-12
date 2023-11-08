let eleccion = document.getElementById("eleccion");
let inputBusqueda = document.getElementById("inputBusqueda");
let botonBuscar = document.getElementById("botonBuscar");
let listaResultados = document.getElementById("listaResultados");

//Seleccion de archivo json:
let valorEleccion = eleccion.value;

eleccion.addEventListener('change', function() {
    valorEleccion = eleccion.value;
    let eventoPersonalizado = new CustomEvent('personalizado');
    eleccion.dispatchEvent(eventoPersonalizado);
});

eleccion.addEventListener('personalizado', mostrarAlerta);

function mostrarAlerta() {
    alert("El archivo de base ahora es: " + valorEleccion);
}
//Fin de seleccion de archivo json.

//Evitar caracteres especiales y numeros

inputBusqueda.addEventListener('keydown', function(event) {
    if((event.key < 65 || event.key > 90) && event.key != 32 && event.key != 8) {
        event.preventDefault();
    }
});

//Fin de evitar caracteres especiales y numeros

botonBuscar.addEventListener('click', buscar);

function buscar() {
    let datosJson;
    listaResultados.innerHTML = "";

    fetch(valorEleccion)
    .then(respuesta => respuesta.json())
    .then((salida) => {
        datosJson = salida;
        for(let objeto of datosJson.data) {
            if(objeto.nombre.startsWith(inputBusqueda.value.toUpperCase())) {
                console.log(objeto.nombre);

                let elementoLista = document.createElement("li");
                let elementoParrafo = document.createElement("p");
                elementoLista.innerText = objeto.nombre;
                elementoParrafo.innerText = objeto.sinopsis;
                listaResultados.appendChild(elementoLista);
                elementoLista.appendChild(elementoParrafo);

                elementoLista.addEventListener("mouseover", function() {
                    elementoParrafo.style.display = "block";
                });

                elementoLista.addEventListener("mouseout", function() {
                    elementoParrafo.style.display = "none";
                });
            }
        }
    }).catch(function(error){alert(error)});
}