const inputValue = document.querySelector("input");
const buttonValue = document.querySelector("button");
const key = 'cdadb8febe6348f74abc4e514a5eee2b'




function mostrarDados(consultaAPI) {
    const tempoEm = document.querySelector('h1')
    const graus = document.querySelector('.graus')
    const previsaoTempo = document.querySelector('.previsaoTempo')
    const umidade = document.querySelector('.umidade')

    tempoEm.innerHTML = consultaAPI.name
    graus.innerHTML = consultaAPI.main.temp
    console.log(consultaAPI)

}


async function coletarDados(valorInput) {

    const consultaAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorInput}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json());

    

    mostrarDados(consultaAPI)
}




function valueButton() {
    
    const valorInput = inputValue.value

    coletarDados(valorInput)
}




buttonValue.addEventListener('click', () => valueButton());

