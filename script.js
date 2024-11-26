const optionImg = document.querySelectorAll(".option-img")
const container = document.querySelector(".container")
const resulttext = document.querySelector(".result-text")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")

const computerImg=['img/pedra.png', 'img/papel.png', 'img/tesoura.png',]

const winner = {
    RR:"Não temos vencedor",
    RP:"Computador Ganhou",
    RS:"Você Ganhou",

    PR:"Você Ganhou",
    PP:"Não temos vencedor",
    PS:"Computador Ganhou",

    SR:"Computador Ganhou",
    SP:"Você Ganhou",
    SS:"Não temos vencedor",
}

function handleOptionClick(event){
    const clickImg = event.currentTarget;
    const userdIndex =  Array.from(optionImg).indexOf(clickImg)

    container.classList.add("start")
    resulttext.innerHTML = "..."

    userResult.src =  computerResult.src  = computerImg[0]


    setTimeout(()=>{
        container.classList.remove("start") 
        
        const randomNumber = Math.floor(Math.random() * computerImg.length)
        computerResult.src = computerImg[randomNumber]

        userResult.src = computerImg[userdIndex]
        
        const userValue = ['R', 'P', 'S'][userdIndex]
        const computerValue = ['R', 'P', 'S'][randomNumber]
        const userComputer = userValue + computerValue

        const finalResult = winner[userComputer]


        resulttext.innerHTML = finalResult
    }, 2000)
}








optionImg.forEach(img => {
    img.addEventListener("click", handleOptionClick)
})