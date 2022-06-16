class Premio {
    constructor(nombre, stock) {
        this.nombre = nombre;
        this.stock = stock;
    }
}
const premios = [];
premios.push(new Premio("BATIDORA", 2));
premios.push(new Premio("FREIDORA", 1));
premios.push(new Premio("HELADERA", 0));
premios.push(new Premio("LICUADORA", 3));
premios.push(new Premio("TOSTADORA", 5));

alert("CONCURSO DE COCINA \n Consultar disponibilidad de premios \n - BATIDORA \n - FREIDORA \n - HELADERA \n - LICUADORA \n - TOSTADORA")

function chequearPremio(existencias, producto) {
    if(producto.toUpperCase() != "ESC"){
        return existencias.find(objeto => objeto.nombre === producto.toUpperCase());
    } else {
        return none;
    }
}

let consulta = chequearPremio(premios, prompt('Coloque el nombre del premio para conocer su stock o ESC para salir'));
    if(consulta != undefined) {
        alert(consulta.nombre+'\n - STOCK: '+consulta.stock);
    } else {
        alert("No existe ese premio, intente de nuevo");
}

while (consulta != "ESC") {
    consulta = chequearPremio(premios, prompt('Coloque el nombre del premio para conocer su stock o ESC para salir'));
    if(consulta != undefined) {
        alert(consulta.nombre+'\n - STOCK: '+consulta.stock);
    } else {
        alert("No existe ese premio, intente de nuevo");
}
}