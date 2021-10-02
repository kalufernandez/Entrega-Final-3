//Funcion menu. Quiero que arme un menu y lo muestre, de acuerdo a las variables que tengo en la pestana variables (menu).
//En la funcion showMenu no le paso nada por parametro porque el menu se lo voy a crear adentro. 
let showMenu = () =>{
    let menu = `Elija un producto: \n` //Estar atento por si esto no funciona. 
    spares.forEach((spare) =>{
        menu += spare.id + "._" + spare.name + "\n"
    })
    menu += (spares.length + 1) + "._" + "Ver carrito \n"
    menu += (spares.length + 2) + "._" + "Salir"
    
    return parseInt(prompt(menu))
}


//Funcion para preguntar si hay stock. Devuelve false y un comentario al usuario si no hay suficiente stock o devuelve true si hay suficiente stock. 
const thereAreStock = (quantity,stock) =>{
    if(quantity > stock){
        alert(`No tenemos suficiente stock, el stock disponible es ${stock}`);
        return false;
    }
    else return true;
}



let addToCart = (option, quantity) => {
    let found = spares.find(spare => spare.id === option) //Arme un metodo para saber que opcion eligio el usuario y la guardo en found.
    if(thereAreStock(quantity, found.stock)){

        cart = localStorage.getItem('cart') //Traigo el carrito del storage (por mas que sea la primera vez), le agrego la herramienta que el usuario esta eligiendo del meno y mas abajo, lo vuelvo a subir al storage. Este procedimiento es para no perder la info que elige el usuario cuando ya esta eligiendo productos. 
        
        if(!cart){ //Si no existe 'cart' ->  Estoy preguntando si no hay nada en el storage. Si esta vacio, creo a cart como un array. 
            cart = []
        }
        else{ //Si no esta vacio, parseo el JSON y lo guardo en cart. 
            cart = JSON.parse(cart);
        }

        let item = {qty:quantity, found};   //Crea un objeto con esta info. Desp lo pushea a cart. Desp lo convierte a JSON y por ultimo, ese JSON lo vuelve a subir al storage.
        cart.push(item)
        cart = JSON.stringify(cart)
        localStorage.setItem('cart', cart)

        
        spares[option-1].stock -= quantity;
        alert(`${found.name} fue agregado al carrito`)
    }
}


//Aca voy a convertir el JSON de spares. 
let spares = JSON.parse(data); //Ahroa es un array de objetos y ya no es mas un JSON. Lo habia convertido en JSON en la pestana de variables (ahi esta data). 


//Esta funcion muestra al usuario el total de repuestos que se va a llevar.
const showTotal = () => {
    let cartToShow = localStorage.getItem(`cart`)
    cartToShow = JSON.parse(cartToShow)

    if(!cartToShow){ //Estoy preguntando si no hay nada en el storage. Si esta vacio, creo a cart como un array. 
        return false;
    }
    else{ //Si no esta vacio, parseo el JSON y lo guardo en cart. 
        let dataToShow = ``;
        let total = 0 ;
        cartToShow.forEach(item =>{
            dataToShow += `Producto: ${item.found.name} Cantidad: ${item.qty} \n`
            total += item.qty;
        });
        dataToShow += `La cantidad de repuestos es: ${total}`
        alert(dataToShow);
        
    }
    localStorage.clear();
};


//Esta funcion muestra al usuario las repuestos  que va subiendo al carrito antes de showTotal.
//Voy a agregar en el menu, la opcion para conocer la cantidad de repuestos en el carrito. 
const showCart = () => {
    let cartToShow = localStorage.getItem(`cart`)
    cartToShow = JSON.parse(cartToShow)

    if(!cartToShow){ //Estoy preguntando si no hay nada en el storage. Si esta vacio, creo a cart como un array. 
        alert(`Aun no tienes repuestos en el carrito`)
    }
    else{ //Si no esta vacio, parseo el JSON y lo guardo en cart. 
        let dataToShow = ``;
        let total = 0 ;
        cartToShow.forEach(item =>{
            dataToShow += `Producto: ${item.found.name} Cantidad: ${item.qty} \n`
        });
        alert(dataToShow);
    }
};

// EVENTS
document.getElementById("mensajeBienvenida").addEventListener("mouseenter", entrar);
document.getElementById("mensajeBienvenida").addEventListener("mouseleave", salir);

function entrar() {
    document.getElementById("mensajeBienvenida").style.backgroundColor = "yellow";
}

function salir() {
    document.getElementById("mensajeBienvenida").style.backgroundColor = "white";
}