async function consultaTasa() {
    let cantTiposDolares
    let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'


    await fetch(url)
        .then((response) => response.json())
        .then((data) => {//console.log(data)
            const datosDolar = document.querySelector('#dolar')
            datosDolar.className = ("ContenedorResultados")

            data.forEach((elemento) => {

                if (["Bitcoin", "Dolar Soja", "Dolar", "Argentina"].includes(elemento.casa.nombre)) {
                    
                    console.log(elemento.casa.nombre+ " no se muestra")
                }
                else {
                    
                    const div = document.createElement("div");
                    div.classList.add("contenedor","campos","cuadroDolarGrande","margin_0","widht_15perc","margin_3");
                    div.innerHTML = `
                    <div class="cuadroDolarChico margin_0">
                        <h4 class="etiquetaDolar margin_0"><p>${elemento.casa.nombre}</p></h4>
                        <div class="valoresCyV">
                            <div><p class="font_bold margin_0303">Compra:</p> <p class="margin_0303">${elemento.casa.compra}</p></div>
                            <div><p class="font_bold margin_0303">Venta:</p> <p class="margin_0303">${elemento.casa.venta}</p></div>
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