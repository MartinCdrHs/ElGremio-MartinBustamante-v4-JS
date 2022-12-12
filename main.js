const carrito = []



const mostrarJuegos = () => {
    const listaJuegos = juegos.map (elemento => "- "+elemento.nombre+ " - $"+elemento.precio)
    alert ("Bienvenido al sistema de reserva de juegos de El Gremio, Aventurero!"+
    "\n\n"+"Esta es nuestra lista de juegos reservables: "+
    "\n\n"+listaJuegos.join("\n"))

    reservarJuego (listaJuegos)
};

const reservarJuego = (listaJuegos) => {
    let masJuegos = false;
    let nombreJuego = ""

    do {
        nombreJuego = prompt ("Qué juego quereis reservar?"+"\n\n"+listaJuegos.join("\n"))
        const juego = juegos.find(elemento => elemento.nombre.toLowerCase() === nombreJuego.toLowerCase())
        
        
        if (juego){
            verificarStock (juego.stock, juego)
        }else{
            alert ("El juego que habeis ingresado no está en nuestro arcón, eligid uno de la lista")
        }

        masJuegos = confirm ("Deseais reservar otro juego?")
    } while (masJuegos);

    console.log (carrito)
};

const verificarStock = (stockJuego, juego) => {
    if (stockJuego < 1) {
        alert ("Temo que ya no nos quedan más de esos Aventureros") 
    }else {
        juego.stock = stockJuego - 1

        agregarCarrito (juego)
    }
}

const agregarCarrito = (juego) => {
    const repetidoCarrito = carrito.find(item => item.nombre.toLowerCase() === juego.nombre.toLowerCase())

    
    if (repetidoCarrito){
        alert ("Alto ahi Aventurero! Parece que en tu bolsa ya tienes uno de estos. Deja algo para los demás!")
    }else{
        carrito.push (juego)
    }
}



mostrarJuegos ()