// import Swal from 'sweetalert2'

// document.addEventListener("click", calcularInteres());
// const Calcular = document.querySelector("#Calcular");

class DatosUsuario {
    constructor(precio, tasa, cuotas, descuento) {
        this.precio = precio;
        this.tasa = tasa;
        this.cuotas = cuotas;
        this.descuento = descuento;
    }

}

// document.querySelector("#Calcular").addEventListener("click", calcularInteres());
// document.querySelector("#recuperaDataStorage").addEventListener("click", recuperaDataStorage());
function calcularInteres() {

    let precioLista = parseFloat(document.getElementById("precioLista").value);
    let tasaDeInteres = parseFloat(document.getElementById("tasaDeInteres").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);
    let descuento = parseInt(document.getElementById("descuento").value);
    let Resultadovalidador = []
    limpiaResultados();
    Resultadovalidador = validaDatos(precioLista, tasaDeInteres, cuotas, descuento);

    if (Resultadovalidador[0] == true) {
        const datos = new DatosUsuario(precioLista, tasaDeInteres, cuotas, descuento)
        guardaEnLocalStorage(precioLista, tasaDeInteres, cuotas, descuento)

        for (let i = 0; i < cuotas; i++) {

            let interes = calculo(precioLista, tasaDeInteres);
            escribeResultados(precioLista.toFixed(2), interes.toFixed(2), (interes + precioLista).toFixed(2), i + 1)
            precioLista += interes;

        }
    }
    else {
        console.log("No se puede hacer calculo")
        let cadena = ""
        for (elemento of Resultadovalidador[1]) {
            cadena += `<p class="fontStyleAlert margin_0">El campo "${elemento}" esta vacío</p> `
        }
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: cadena,//cadena += `<p class="fontStyleAlert margin_0">El campo "${elemento}" esta vacío</p> `
        })
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

function validaDatos(precioLista, tasaDeInteres, cuotas, descuento) {

    let arrayFallo = []
    let valida = true;

    let retorno1 = validador(precioLista, "precioLista")
    if (retorno1 == false) {
        valida = false;
        arrayFallo.push("precioLista")
    }
    let retorno2 = validador(tasaDeInteres, "Tasa de interés")
    if (retorno2 == false) {
        valida = false;
        arrayFallo.push("Tasa de interés")
    }
    let retorno3 = validador(cuotas, "cuotas")
    if (retorno3 == false) {
        valida = false;
        arrayFallo.push("cuotas")
    }
    let retorno4 = validador(descuento, "descuento")
    if (retorno4 == false) {
        valida = false;
        arrayFallo.push("descuento")
    }

    return [valida, arrayFallo]
}

function validador(entradaValidador, campo) {
    let valida
    if (isNaN(entradaValidador) == true) {
        valida = false;
        console.log(entradaValidador)
    }
    else {
        valida = true;

    }

    return valida

}

function guardaEnLocalStorage(precioLista, tasaDeInteres, cuotas, descuento) {
    localStorage.setItem('precioLista', precioLista)
    localStorage.setItem('tasaDeInteres', tasaDeInteres)
    localStorage.setItem('cuotas', cuotas)
    localStorage.setItem('descuento', descuento)
}

function recuperaData() {
    let precioLista = localStorage.getItem('precioLista')
    let tasaDeInteres = localStorage.getItem('tasaDeInteres')
    let cuotas = localStorage.getItem('cuotas')
    let descuento = localStorage.getItem('descuento')

    if (precioLista === null && tasaDeInteres === null && cuotas === null && descuento === null) {
        Swal.fire({
            icon: 'error',
            title: 'Sin datos!',
            html: `<p class="fontStyleAlert margin_0">No existe datos de consultas anteriores</p> `
        })
    }
    else{
        escribeEnForm(precioLista,tasaDeInteres,cuotas,descuento)
    }

}

function escribeEnForm(precioLista,tasaDeInteres,cuotas,descuento){
    document.getElementById("precioLista").value=precioLista;
    document.getElementById("tasaDeInteres").value=tasaDeInteres;
    document.getElementById("cuotas").value=cuotas;
    document.getElementById("descuento").value=descuento;

}

function LimpiaDataStrg() {
    localStorage.clear()
    Swal.fire({
        icon: 'info',
        title: 'Realizado!',
        html: `<p class="fontStyleAlert margin_0">Se limpio historial</p> `
    })
}