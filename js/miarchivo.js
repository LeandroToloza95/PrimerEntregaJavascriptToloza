// document.addEventListener("click", calcularInteres());
// const Calcular = document.querySelector("#Calcular");

document.querySelector("#Calcular").addEventListener("click", calcularInteres());

function calcularInteres() {
    
    let capital = parseFloat(document.getElementById("capital").value);
    let tasaDeInteres = parseFloat(document.getElementById("tasaDeInteres").value);
    let plazo = parseInt(document.getElementById("plazo").value);

    limpiaResultados();
    let valida = validaDatos(capital,tasaDeInteres,plazo);
    
    if (valida == true) {


        for (let i = 0; i < plazo; i++) {
            let interes = calculo(capital, tasaDeInteres);
            escribeResultados(capital.toFixed(2), interes.toFixed(2), (interes + capital).toFixed(2), i + 1)
            capital += interes;
        }
    }
    else{
        console.log("No se puede hacer calculo")
    }
}

function calculo(capital, tasaDeInteres) {
    let capitalCalculo = capital;
    let tasaDeInteresCalculo = tasaDeInteres;
    //Calculo de un mes
    let interesCalculo = capitalCalculo * (tasaDeInteresCalculo / 100) / 12
    return interesCalculo
}

function escribeResultados(capital, interes, sumaCapitalInteres, mes) {
    document.querySelector("#result").insertAdjacentHTML(
        'beforeend',

        `
        <div class="contenedor padre " >
            <div class="etiquetas campos mes"><span >Mes: ${mes}</span></div>
            <div class="campos">
                <span class="etiquetas">Capital: </span>$ ${capital}
            </div>
            <div class="campos">
                <span class="etiquetas">Interes: </span>$ ${interes}
            </div>
            <div class="lineaInferior">
                
            </div>            
            <div class="campos">
                <span class="etiquetas">Capital + Interes: </span>$ ${sumaCapitalInteres}
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

function validaDatos(capital,tasaDeInteres,plazo) {

    
    let valida=true;

    let retorno1=validador(capital,"Capital")
    if(retorno1==false){
        valida=false;
    }
    let retorno2=validador(tasaDeInteres,"Tasa de interés")
    if(retorno2==false){
        valida=false;
    }
    let retorno3=validador(plazo,"Plazo")
    if(retorno3==false){
        valida=false;
    }

    return valida
}

function validador(entradaValidador,campo){
    let valida
    if (isNaN(entradaValidador)==true){
        valida=false;
        alert(`El campo "${campo}" esta vacío`);
        console.log(entradaValidador)
    }
    else {
        valida=true;

    }
    
    return valida

}