const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Laahh..Really?! I lab u na poo!!"
    gif.src = "https://media1.tenor.com/m/JyqIc_WLYMIAAAAC/love-chubby.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeigth - noBtnRect.heigth;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.Style.left = randomX + "px";
    noBtn.Style.top = randomY + "py"; 
})