


function consultaTasa(){
    let url ='https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data[0].casa.nombre))
}
consultaTasa()