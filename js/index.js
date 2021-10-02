alert(`Bienvenido al palier de repuestos`)


do{
    //muestra el menu si por alguna razon tenes la necesidad de volver a abrirlo y que se muestre. 
    let mostrarMenu = document.getElementById("mostrarMenu");
    mostrarMenu.addEventListener("click", showMenu)

    
    let option = showMenu();
    if(option === spares.length +1){ //Le digo que si es igual al numero de mostrar carrito, que lo muestre
        showCart()
    }
    else{
        if (option === spares.length + 2) break; //Arme la condicion para salir.
        let qty = parseInt(prompt(selectQty))
        addToCart(option,qty)
    }
    
    resp = prompt(`¿Desea agregar mas herramienta? S/N`)

} while(resp === "S" || resp === `s`);

/* if(cart > 0){
    alert(`Te estas llevando ${cart} herramientas`);
} */ // Esta funcion la voy a reemplazar por la de abajo, por todos los cambios hecho con JSON y storage.  

if (resp === "N" || resp === "n"){
    showTotal();
}


alert('Gracias, vuelva pronto');