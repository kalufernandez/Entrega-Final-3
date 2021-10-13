$("body").prepend('<button id="btn2">Boton ON</button>');
$("body").prepend('<button id="btn1">Menu</button>');


$("#btn1").click(function() { //Llamo al id del boton creado, despues le digo cual va a ser el evento que lo va a invocar y por ultimo le paso la funcion que se va a ejecutar a partir del evento click. 
    for(repuesto of spares){
        $(`#btn1`).append(
            `<div>
            <h4> Repuesto: ${repuesto.nombre}</h4>
            <h5> Stock: ${repuesto.stock}</h5>
            <button id ="btn3-${repuesto.id}">Mostrar stock</button>
            </div>`);
    
        $(`#btn3-${repuesto.id}`).click( function (){
            console.log(`${repuesto.stock}`)
        });

        }});



$(`#btn2`).on("click", function () {
    for (repuesto of spares) {
        console.log(`Del repuesto: ${repuesto.nombre} el stock es: ${repuesto.stock} y el ID es: ${repuesto.id}`);    
}});



$("#mostrarMenu").click(() => { 
    //Usamos trigger para disparar el evento change de ipt1 
    $("#btn1").trigger("click");
    $("#btn2").trigger("click");
    document.body.style.backgroundColor = `yellow`
});