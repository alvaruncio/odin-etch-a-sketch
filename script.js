onload = () => {
    pintarGrill(VALOR_DEFAULT_NUMERO_PINTAR_POR_FILA)
    añadirEventoBoton("new-button")
}

const VALOR_DEFAULT_NUMERO_PINTAR_POR_FILA = 16


function pintarGrill(numeroPorLado){

    let container = document.getElementById("container")
    if(container){
        container.innerHTML = ""
    }

    let totalCeldas = numeroPorLado * numeroPorLado
    let tamañoCelda = 960 / numeroPorLado

    let contenidoHTML = ""

    for (let index = 0; index < totalCeldas; index++){
        contenidoHTML += `
            <div class='hover-momento' style='width:${tamañoCelda}px; height:${tamañoCelda}px'> 
            </div>
        `
    }

    container.insertAdjacentHTML("afterbegin", contenidoHTML)
    añadirEventoHover()

}


function añadirEventoHover(){
    let divsHoverMomento = [...document.getElementsByClassName("hover-momento")]
    divsHoverMomento.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black"
        })
    })
}

function añadirEventoBoton(idBoton){
    let boton = document.getElementById(idBoton)
    boton.addEventListener("click", () => {
        pedirNuevoDato()
    })
}


function pedirNuevoDato(){
    let valor = -1
    do{
        try{
            valor = Number.parseInt(prompt("Introduce el valor a pintar"))
        }catch(error){
            console.log(error)
            valor = -1
        }
    }while(valor > 100 || valor <= 0)
    pintarGrill(valor)
}