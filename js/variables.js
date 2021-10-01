const selectQty = `Elija la cantidad de repuestos que desea`

let catalogo = [
    {id: 1, name: `Placa de Video`, stock: 4},
    {id: 2, name: `Fuente para WS`, stock: 4},
    {id: 3, name: `Cabezales`, stock: 4},
    {id: 4, name: `Monitor 24 pulgadas`, stock: 4}
]
const data = JSON.stringify(catalogo) //Converti el catalogo en un JSON. En la pestana funciones, lo paso a string y lo guardo en una variable llamada spare y lo uso. 

let cart = [];

let resp = 'S';