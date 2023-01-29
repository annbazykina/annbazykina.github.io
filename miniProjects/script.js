const mainButtons = document.querySelector('.main-buttons').children;
const divMillioner = document.querySelector('.container-for-millioner');
const divCalc = document.querySelector('.container-calculator');
const divGenerator = document.querySelector('.container-for-generator');
const divMainBtn = document.querySelector('.main-buttons');
const btnBack = document.querySelectorAll('.main-buttons-back');


for(let btn of mainButtons) {
    btn.addEventListener('click', () => {
        if(btn === mainButtons[0]) {
            divMillioner.classList.remove('hide-project');
        } else if(btn === mainButtons[1]) {
            divCalc.classList.remove('hide-project');
        } else {
            divGenerator.classList.remove('hide-project');
        }

        divMainBtn.classList.add('hide-project');
        
    })
}


for(let btn of btnBack) {
    btn.addEventListener('click',  () => {
        divMainBtn.classList.remove('hide-project');
        divMillioner.classList.add('hide-project');
        divCalc.classList.add('hide-project');
        divGenerator.classList.add('hide-project');
    })
}