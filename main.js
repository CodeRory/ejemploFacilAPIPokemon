//Creamos una constante con la url
const url = "https://pokeapi.co/api/v2/pokemon/1"

//Pedimos los datos a la API con fetch
fetch(url)
//Usamos then como manejador de promesas y utilizamos su método .json para
// pasarlo a un objeto de JavaScript
.then(response => response.json())
// imprimimos datos por consola
.then(data => {
    console.log(data)
    //Creamos una plantilla para mostrar esos datos. Creamos una variable que se llama element
    // que se insertará en el html, en concreto, la etiqueta elem que creamos anteriormente en index.html
    let element = document.getElementById('elem')
    //Decimos qué va a ir en nuestra variable element, interpolando las distintas variables
    element.innerHTML = `<p>${data.name}</p>
        <p>${data.order}</p>
        <img src='${data.sprites.front_default}'/>        
        `
    let element2 = document.getElementById('elem2')
    //element2.innerHTML = "Cuando se quiera cambiar de Pokemon, cambiar la URL a otro número que no sea 1"
    function random(){
        let suma = Math.random()
        return suma
    }

    element2.innerHTML = random();


    
})
.catch(error => console.log(error))