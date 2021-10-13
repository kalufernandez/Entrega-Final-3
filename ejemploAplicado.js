// Array de objetos para agregar información al DOM.
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];



// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $("#app").append(`<div>
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button id="btn${producto.id}">Comprar</button>
                        </div>`);




                        
    //Asociamos el evento a botón recién creado.
    $(`#btn${producto.id}`).on('click', function () {
        console.log(`Compreaste ${producto.nombre}`);
    });
}