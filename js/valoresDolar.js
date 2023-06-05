async function consultaTasa() {
    let cantTiposDolares
    let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'


    await fetch(url)
        .then((response) => response.json())
        .then((data) => {//console.log(data)
            const datosDolar = document.querySelector('#dolar')
            datosDolar.className = ("ContenedorResultados padre cuadroDolar")

            data.forEach((elemento) => {

                if (["Bitcoin", "Dolar Soja", "Dolar", "Argentina"].includes(elemento.casa.nombre)) {
                    
                    console.log(elemento.casa.nombre+ " no se muestra")
                }
                else {
                    
                    const div = document.createElement("div");
                    div.classList.add("contenedor", "padre","campos","cuadroDolar");
                    div.innerHTML = `
                    <h4 class="etiquetaDolar">${elemento.casa.nombre}</h4>
                    <div class="valoresCyV">
                    <p>Compra: ${elemento.casa.compra}</p>
                    <p>Venta: ${elemento.casa.venta}</p>
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