const buttons = document.querySelectorAll('.btn-calculator');
const screen = document.querySelector('.screen');
const result = {
    sign: '',
    num: 0,
    res: 0,
};


const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

const removeSpaces = (num) => num.toString().replace(/\s/g, '');

const math = (a, b, sign) =>
    sign === '+' ? (a * 100 + b * 100) / 100 : sign === '-' ? a - b : sign === 'X' ? (a * 100 * b) / 100 : a / b;

const resetClickHandler = () => {
    result.sign = '';
    result.num = 0;
    result.res = 0;
}

const invertClickHandler = () => {
    result.num = result.num ? toLocaleString(removeSpaces(result.num) * -1) : 0;
    result.res = result.res ? toLocaleString(removeSpaces(result.res) * -1) : 0;
    result.sign = '';
};

const numClickHandler = (value) => {
    console.log(result);
    if (result.num.length > 6) return;
    if (removeSpaces(value).length < 16) {
        result.num = removeSpaces(value) % 1 === 0 && !value.toString().includes('.')
            ? toLocaleString(Number(removeSpaces(result.num + value)))
            : toLocaleString(result.num + value);
        result.res = !result.sign ? 0 : result.res;
    }

};

const comaClickHandler = (value) => result.num = !result.num.toString().includes('.') ? result.num  + value : result.num;

const percentClickHandler = () => {
    let num = result.num ? parseFloat(removeSpaces(result.num)) : 0;
    let res = result.res ? parseFloat(removeSpaces(result.res)) : 0;
    result.num = (num /= Math.pow(100, 1));
    result.res = (res /= Math.pow(100, 1));
    result.sign = '';
};

const signClickHandler = (value) => {
    result.sign = value;
    result.res = !result.num
        ? result.res
        : !result.res
        ? result.num
        : toLocaleString(
            math(
                Number(removeSpaces(result.res)),
                Number(removeSpaces(result.num)),
                result.sign
            )
        );
    result.num = 0;
};

const equalsClickHandler = () => {
    if (result.sign && result.num) {
        result.res = result.num === '0' && result.sign === '/'
            ? 'Помилка'
            : toLocaleString(
                math(
                    Number(removeSpaces(result.res)),
                    Number(removeSpaces(result.num)),
                    result.sign
                )
            );
        result.sign = '';
        result.num = 0;
    }
};

for(let btn of buttons) {
        btn.addEventListener('click', (event)  => {
            let value = event.target.value;
            console.log('value', value);
            value === 'c' 
                ? resetClickHandler()
                : value === '/' || value === 'X' || value === '-' || value === '+'
                ? signClickHandler(value)
                : value === 'plus-minus'
                ? invertClickHandler()
                : value === '='
                ? equalsClickHandler()
                : value === '.'
                ? comaClickHandler(value)
                : value === "%"
                ? percentClickHandler()
                : numClickHandler(value);
            screen.textContent = result.num ? result.num : result.res;
        });
}













// let arr1 = [];
// let result = 0 ;
// let numValue = '';
// const operators = ['+', '-', '*', '%', '/'];
// for(let btn of buttons) {
//     btn.addEventListener('click', (event)  => {
//         let value = event.target.value;
//         if (value === '%') {
//             screen.textContent = eval(arr1.join('')) / 100;
//         }
//         if (value === '=') {
//             result = eval(arr1.join('')) ;
//             screen.textContent = result;
//             numValue = '';
//             arr1 = [];
//             console.log(toString(result).length);
//         } else {
//             numValue += value;
//             if (!operators.includes(value)) {
//                 console.log(value);
//                 screen.textContent = numValue;
//             } else {
//                 numValue = '';
//             }
            
//             arr1.push(value);
//             console.log(arr1);
//         }

//         if (arr1.length === 0 && !Number(value)) {
//             return;
//         }
//     })
// }

//     clear.onclick = () => {
//         arr1 = [];
//         numValue = '';
//         screen.textContent = 0;
//     }
