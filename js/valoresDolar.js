async function consultaTasa() {
    let cantTiposDolares
    let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'


    await fetch(url)
        .then((response) => response.json())
        .then((data) => {//console.log(data)
            const datosDolar = document.querySelector('#dolar')
            datosDolar.className = ("ContenedorResultados cuadroDolar")

            data.forEach((elemento) => {

                if (["Bitcoin", "Dolar Soja", "Dolar", "Argentina"].includes(elemento.casa.nombre)) {
                    
                    console.log(elemento.casa.nombre+ " no se muestra")
                }
                else {
                    
                    const div = document.createElement("div");
                    div.classList.add("contenedor","campos","cuadroDolar","margin_0","widht_15perc");
                    div.innerHTML = `
                    <div class="cuadroDolarChico margin_0">
                        <h4 class="etiquetaDolar"><p>${elemento.casa.nombre}</p></h4>
                        <div class="valoresCyV">
                            <p class="font_bold margin_3">Compra:</p> <p class="margin_3">${elemento.casa.compra}</p>
                            <p class="font_bold margin_3">Venta:</p> <p class="margin_3">${elemento.casa.venta}</p>
                        </div>
                    </div>
                    `
                    datosDolar.append(div)

                    // <p>Cuerpo: ${elemento.body}</p>
                }
            })
        }


        )

}
consultaTasa()