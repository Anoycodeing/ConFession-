const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const wrapper = document.querySelector(".wrapper");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Laahh..Really?! I lab u na poo!!";
    gif.src = "https://media1.tenor.com/m/JyqIc_WLYMIAAAAC/love-chubby.gif";
    btnGroup.style.display = "none";
});

noBtn.addEventListener("click", () => {
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
