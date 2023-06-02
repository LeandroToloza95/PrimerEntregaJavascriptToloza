// document.addEventListener("click", calcularInteres());
// const Calcular = document.querySelector("#Calcular");

class DatosUsuario {
    constructor(precio, tasa, cuotas, descuento) {
        this.precio=precio;
        this.tasa=tasa;
        this.cuotas=cuotas;
        this.descuento=descuento;
    }
    
}

document.querySelector("#Calcular").addEventListener("click", calcularInteres());

function calcularInteres() {

    let precioLista = parseFloat(document.getElementById("precioLista").value);
    let tasaDeInteres = parseFloat(document.getElementById("tasaDeInteres").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let descuento = parseInt(document.getElementById("descuento").value);

    limpiaResultados();
    let valida = validaDatos(precioLista, tasaDeInteres, cuotas, descuento);

    if (valida == true) {
        const datos=new DatosUsuario(precioLista,tasaDeInteres,cuotas,descuento)
        

        for (let i = 0; i < cuotas; i++) {
            let interes = calculo(precioLista, tasaDeInteres);
            escribeResultados(precioLista.toFixed(2), interes.toFixed(2), (interes + precioLista).toFixed(2), i + 1)
            precioLista += interes;
        }
    }
    else {
        console.log("No se puede hacer calculo")
    }
}

function calculo(precioLista, tasaDeInteres) {
    let precioListaCalculo = precioLista;
    let tasaDeInteresCalculo = tasaDeInteres;
    //Calculo de un mes
    let interesCalculo = precioListaCalculo * (tasaDeInteresCalculo / 100) / 12
    return interesCalculo
}

function escribeResultados(precioLista, interes, sumaprecioListaInteres, mes) {
    document.querySelector("#result").insertAdjacentHTML(
        'beforeend',

        `
        <div class="contenedor padre " >
            <div class="etiquetas campos mes"><span >Mes: ${mes}</span></div>
            <div class="campos">
                <span class="etiquetas">Capital: </span>$ ${precioLista}
            </div>
            <div class="campos">
                <span class="etiquetas">Interes: </span>$ ${interes}
            </div>
            <div class="lineaInferior">
                
            </div>            
            <div class="campos">
                <span class="etiquetas">Capital + Interes: </span>$ ${sumaprecioListaInteres}
            </div>
        </div>
        `
    );

}

function limpiaResultados() {
    document.getElementById("result").remove();
    document.querySelector("#posicionCodigo").insertAdjacentHTML(
        'beforeend',
        `<code id="result" class="ContenedorResultados"></code>`
    )

}

function validaDatos(precioLista, tasaDeInteres, cuotas,descuento) {


    let valida = true;

    let retorno1 = validador(precioLista, "precioLista")
    if (retorno1 == false) {
        valida = false;
    }
    let retorno2 = validador(tasaDeInteres, "Tasa de interés")
    if (retorno2 == false) {
        valida = false;
    }
    let retorno3 = validador(cuotas, "cuotas")
    if (retorno3 == false) {
        valida = false;
    }
    let retorno4 = validador(descuento, "descuento")
    if (retorno4 == false) {
        valida = false;
    }
    return valida
}

function validador(entradaValidador, campo) {
    let valida
    if (isNaN(entradaValidador) == true) {
        valida = false;
        alert(`El campo "${campo}" esta vacío`);
        console.log(entradaValidador)
    }
    else {
        valida = true;

    }

    return valida

}