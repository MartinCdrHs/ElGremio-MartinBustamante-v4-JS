const mostrarJuegos = () => {
    const listaJuegos = juegos.map (elemento => "- "+elemento.nombre+ " - $"+elemento.precio)
    alert ("Bienvenido al sistema de reserva de juegos de El Gremio!"+
    "\n\n"+"Esta es nuestra lista de juegos reservables: "+
    "\n\n"+listaJuegos.join("\n"))

    reservarJuego ()
};

const reservarJuego = (mostrarJuegos) => {
    const reserva = () => {}
};

mostrarJuegos ()