
//Generator Uniq Random Numbers with 
let btnGenerator = document.querySelector('.btn-generator');

const checkboxBtn = document.querySelector('#checkbox');

btnGenerator.addEventListener('click', generateRandomNum);



function generateRandomNum() {
    let min = Number(document.querySelector('#min').value);
    let max = Number(document.querySelector('#max').value);
    const count = Number(document.querySelector('#count').value);
    let randomNumEl = document.querySelector('.generator-random-num');  


    let uniqSet = new Set();
    let arr = [];
    min = Math.ceil(min);
    max = Math.floor(max);
    const maxCount = max - min + 1;

    
    if(checkboxBtn.checked) {
        while(count !== uniqSet.size) {
            if(count > maxCount) { 
                alert(`Не можливо вивести, count перевищує можливий діапазон. Зменшіть сount. Максимальне значення count дорівнює ${maxCount}`);
                break;
            };
            let random = Math.floor(Math.random() * (maxCount)) + min;
            uniqSet.add(random);
            
            console.log(uniqSet);
        }
        randomNumEl.textContent = Array.from(uniqSet).join(' | ');
    } else {
        while(count !== arr.length) {
        let random = Math.floor(Math.random() * (maxCount)) + min;
        arr.push(random);
        console.log(arr);
        randomNumEl.textContent = Array.from(arr).join(' | ');
        }
    
    }
    
}















//Generator Random Number
// let btnGenerator = document.querySelector('.btn-generator');

// btnGenerator.addEventListener('click', generateRandomNum);

// function generateRandomNum() {
//     let min = document.querySelector('#min').value;
//     let max = document.querySelector('#max').value;
//     let count = document.querySelector('#count').value;
//     let randomNumEl = document.querySelector('.generator-random-num');  
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     randomNumEl.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
// }

