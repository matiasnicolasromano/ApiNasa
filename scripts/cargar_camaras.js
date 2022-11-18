//Función para cargar los rovers al campo "select".
function cargarRovers() {
    //Inicializamos el array.
    var array = ["Curiosity", "Opportunity", "Spirit"];
    //Ordena el array alfabeticamente.
    array.sort();
    //Pasamos a la funcion addOptions(el ID del select, los rovers cargados en el array).
    addOptions("provincia", array);
}


//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (provincia in array) {
        var opcion = document.createElement("option");
        opcion.text = array[provincia];
        
        opcion.value = array[provincia].toLowerCase()
        selector.add(opcion);
    }
}

function cargarCamaras() {
    // Objeto de rovers con camaras
    var listaPueblos = {
      curiosity: ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam"],
      opportunity: ["fhaz", "rhaz", "navcam", "pancam", "minites"],
      spirit: ["fhaz", "rhaz", "navcam", "pancam", "minites"],
      
    }
    
    var provincias = document.getElementById('provincia')
    var pueblos = document.getElementById('pueblo')
    var provinciaSeleccionada = provincias.value
    
    
    pueblos.innerHTML = '<option value="">Seleccione una Cámara...</option>'
    
    if(provinciaSeleccionada !== ''){
      
      provinciaSeleccionada = listaPueblos[provinciaSeleccionada]
      provinciaSeleccionada.sort()
    
      
      provinciaSeleccionada.forEach(function(pueblo){
        let opcion = document.createElement('option')
        opcion.value = pueblo
        opcion.text = pueblo
        pueblos.add(opcion)
      });
    }
    
  }
  

cargarRovers();