async function consultaTasa() {
    let cantTiposDolares
    let url = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'


    await fetch(url)
        .then((response) => response.json())
        .then((data) => {//console.log(data)
            const datosDolar = document.querySelector('#dolar')
            datosDolar.className = ("ContenedorResultados padre")

            data.forEach((elemento) => {
                console.log(elemento.casa);

                const div = document.createElement("div");
                div.classList.add("contenedor","padre");
                div.innerHTML = `
                    <h4>${elemento.casa.nombre}</h4>
                    <p>Compra: ${elemento.casa.compra}</p>
                    <p>Venta: ${elemento.casa.venta}</p>
                    <p>% variación -1d: ${elemento.casa.variacion}</p>

                    `
                datosDolar.append(div)

                // <p>Cuerpo: ${elemento.body}</p>
            })
        }


        )

}
consultaTasa()