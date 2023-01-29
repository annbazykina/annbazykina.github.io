const easyQuestions = [
    { 
        question: 'Який материк найбільший?',
        answer: ['Африка', 'Північна Америка', 'Євразія', 'Антарктида'],
        corectAnswer: 'c', // 3
        explanation: 'Євразія — найбільший материк на Землі, що складається з Європи та Азії.',
    },
    {
        question: 'Які кольори державного прапора України?',
        answer: ['Синій, білий', 'Синій, жовтий', 'Червоний, білий', 'Жовтий, білий'],
        corectAnswer: 'b',
        explanation: 'Державний Прапор України – стяг із двох рівновеликих горизонтальних смуг синього та жовтого кольорів.'

    },
    {
        question:'Який з цих гормонів є лише у жінок?',
        answer: ['Прогестерон', 'Тестостерон', 'Ендорфін', 'Окситоцин'],
        corectAnswer: 'a',
        explanation: 'Прогестерон. Це гормон другої фази менструального циклу та вагітності.',
    },
    {
        question: 'У якого з цих транспортних засобів є стоп-кран?',
        answer: ['Потяг', 'Літак', 'Автобус', 'Вертоліт'],
        corectAnswer: 'a', 
        explanation: 'Стоп-кран — пристрій, призначений для екстреного гальмування потяга.',
    },
    {
        question: 'В якому році впала Берлінська стіна?',
        answer: ['1990', '1989', '1988', '1987'],
        corectAnswer: 'b', 
        explanation: 'Берлі́нський мур, Берлі́нська стіна - комплекс споруд між двома частинами Берліна, проіснував до 9 листопада 1989.',
    },
    {
        question: 'Яка овочева культура змагається за першість лелеки в питанні появи дітей на світло?',
        answer: ['Баклажан', 'Кабачек', 'Спаржа', 'Капуста'],
        corectAnswer: 'd', 
        explanation: 'Капуста здавна славиться своїм благотворним впливом на організм людей (овоч багатий на корисні речовини).',
    },

];

const middleQuestion = [
    {
        question: 'Який міфологічний персонаж перетворював на золото все, чого торкався?',
        answer: ['Промітей', 'Сизар', 'Дамокл', 'Мідас'],
        corectAnswer: 'd', 
        explanation: 'За однією з легенд цар Мідас отримав від Діоніса дар перетворювати усе, до чого торкалося його тіло, на золото.',
    },
    {
        question: 'У якій країні знаходиться місто Александрія?',
        answer: ['Єфіопія', 'Туреччина', 'Єгипет', 'Індія'],
        corectAnswer: 'c', 
        explanation: 'Александрія - головний порт, друге за величиною та економічним значенням місто Єгипту.',
    },
    {
        question: 'Яке повне ім`я барбі?',
        answer: ['Барбара Міллісент Робертс', 'Анна Луіза', 'Марія Єлізавета Жозефіна', 'Беата Марія Хелена'],
        corectAnswer: 'a', 
        explanation: 'Повне вигадане ім`я Барбі — Барбара Міллісент Робертс.',
    },
    {
        question: 'Найменший птах у світі?',
        answer: ['Золотомушок', 'Шишкар', 'Колібрі-бджілка', 'Горобець'],
        corectAnswer: 'c', 
        explanation: 'Колібрі-бджілка - найменша пташка у світі. Її довжина не перевищує шести сантиметрів. Ще більше дивує її вага — до двох грамів.',
    },
    {
        question: ' Яка національна тварина Шотландії?',
        answer: ['Кінь', 'Єдиноріг', 'Вовк', 'Корова'],
        corectAnswer: 'b', 
        explanation: 'Єдинорі - глибокі зв`язки Шотландії з єдинорогом випливають з її кельтської культури. Кельтська міфологія вірила, що єдинороги символізують невинність та чистоту, а також асоціюються з лицарством, гордістю та сміливістю.',
    },
    {
        question: 'У якому відомому романі фігурували Джо, Мег, Бет та Емі Марч?',
        answer: ['Маленькі жінки', 'Мобі Дік', 'Том Сойєр', 'Вбити пересмішника'],
        corectAnswer: 'a', 
        explanation: 'Мег, Бет та Емі Марч були засновані на сестрах письменниці «Маленькі жінки» Луїзи Мей Олкотт.',
    },
    {
        question: 'У якій країні виробляють найбільше кави у світі?',
        answer: ['Колумбія', 'Індонезія', 'В`єтнам', 'Бразилія'],
        corectAnswer: 'd', 
        explanation: 'Бразилія виробляє приблизно одну третину світової кави.',
    },
];

const hardQuestion = [
    {
        question: ' Як називаються чотири будинки Гоґвортсу?',
        answer: ['Грифіндор, Рейвенкло, Хаффлпафф та Слизерин', 'Гріфін, Ворон, Слон та Змія', 'Північ, Схід, Захід та Південь', 'Червоний, синій, зелений та помаранчевий'],
        corectAnswer: 'a', 
        explanation: 'Грифіндор, Рейвенкло, Хаффлпафф та Слизерин.У цьому капелюсі для сортування вказано, до якого будинку мають належати студенти Гоґвортсу.',
    },
    {
        question: 'Який аромат Куантро?',
        answer: ['Васильковий', 'Лимонний', 'Ваніль', 'Апельсиновий'],
        corectAnswer: 'd', 
        explanation: 'Cointreau — лікер зі смаком апельсина, який вперше був проданий в 1875 році.',
    },
    {
        question: 'Який персонаж Діснея в «Русалочці» співає пісню «Kiss the Girl»?',
        answer: ['Камбала', 'Себастьян', 'Урсула', 'Prince Ерік'],
        corectAnswer: 'b', 
        explanation: 'Американський актор Семюел Е. Райт, який озвучив Себастьяна, спочатку співав Kiss the Girl.',
    },
    {
        question: 'Що означає термін «фортепіано»?',
        answer: ['У швидкому темпі', 'Щоб грати тихо', 'Помірно повільний', 'У швидкому темпі'],
        corectAnswer: 'b', 
        explanation: 'Щоб грати тихо. Піаніно визначається як рівень звуку, коли музика звучить тихо.',
    },
    {
        question: 'Хто написав епічну поему «Втрачений рай»?',
        answer: ['Джон Стейнбек', 'Генрі Джеймс', 'Джон Кітс', 'Джон Мілтон'],
        corectAnswer: 'd', 
        explanation: 'Джон Мілтон.Paradise Lost вважається одним з найвидатніших віршів англійською мовою.',
    },
    {
        question: 'Який був перший повнометражний анімаційний фільм?',
        answer: ['Покахонтас', 'Маленька русалка', 'Білосніжка і сім гномів', 'Попелюшка'],
        corectAnswer: 'c', 
        explanation: 'Білосніжка і сім гномів. Вперше його випустили в 1937 році.',
    },
    {
        question: 'У «Матриці» якого кольору таблетка, яку приймає Нео?',
        answer: ['Червоний', 'Синій', 'Зелений', 'Жовтий'],
        corectAnswer: 'a', 
        explanation: 'Прийняти червону таблетку означає дізнатися справжню правду в «Матриці».',
    },
    {
        question: 'Який діаметр баскетбольного кільця в дюймах?',
        answer: ['19 дюймів', '17 дюймів', '18 дюймів', '16 дюймів'],
        corectAnswer: 'c', 
        explanation: 'Усі баскетбольні кільця мають діаметр 18 дюймів.',
    },
];

const randomInfo = [
    'Ви молодець!',
    'Дуже добре.',
    'Так тримати!',
    'Далі буде ще цікавіше!',
    'Не зупиняйся!',
    'Не соромся просити про допомогу — підтримка поруч!',
    'А пам’ятаєш, як ти вчинив того разу, і в тебе все вийшло?',
    'Переживати труднощі — це нормально!',
    'Продовжуй рухатися вперед!',
    'Труднощі роблять тебе сильнішим!',
    'Не втрачай нових можливостей!',
]

const startButton = document.querySelector('#start');
const ques = document.querySelector('#question');
const answerButtons = document.querySelectorAll('#answers-button button');
const nextButton = document.querySelector('#next-question');
// const corectScore = document.querySelector('#correct-score');
const questionWrapper = document.querySelector('#question-wrapper')
const sums = document.querySelector('#sums').children;
const info = document.querySelector('.info-window');
const btnFifty = document.querySelector('#fifty');
const btnCallFriend = document.querySelector('#callFriend');
const millioner = document.querySelector('.container-millioner');
const time = document.querySelector('.time');

let uniqQuestion;
let countTwo = 0;
let t = 60;
let uniqArr = [];
let count = 1;
let timerId;
const answerMap = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
};

startButton.onclick = () => {
    getNextQuestion(easyQuestions);
    hide(startButton);
    enabledButton(btnFifty);
    enabledButton(btnCallFriend);
    enabledButton(nextButton);
    show(millioner);
    timer(t);
    resetCount();
    for(let sum of sums) {
        sum.classList.remove('win');
    }
    info.textContent = '';
};

function timer (from, to = 0) {
    function go() {
        time.textContent = `00 : ${from < 10 ? '0' + from : from}`;
        if (from === to) {
            clearInterval(timerId);
            info.textContent = 'Час закінчився. Ви програли.'
            for(let unClickButton of document.querySelectorAll('#answers-button button')) {
                disabledButton(unClickButton);
            };
            show(startButton);
        }
        from--;
    }
    go();
    timerId = setInterval(go, 1000);
}

function resetCount() {
    count = 1;
    document.querySelector('#score').innerHTML = `Score: <span id="correct-score">${count}</span> / <span id="complete-answer">15</span>`;
}

nextButton.addEventListener('click',() => {
    const exp = document.querySelector('#explanation');
    removeAllClasses();
    hide(exp);
    document.querySelector('#correct-score').textContent = count;
    if(count <= 5) {
        getNextQuestion(easyQuestions);
    } else if(count <= 10) {
        getNextQuestion(middleQuestion);
    } else {
        getNextQuestion(hardQuestion);
    }
    info.textContent = '';
    hide(nextButton);
    clearInterval(timerId);
    timer(t);
});

btnFifty.onclick = () => {
    for(let btn of document.querySelectorAll('#answers-button button')) {
        if (btn.value !== uniqQuestion.corectAnswer && countTwo !== 2) {
            document.querySelector(`button[name="${btn.value}"]`).remove();
            countTwo++;
        }
    }
    disabledButton(btnFifty);
};

btnCallFriend.onclick = () => {
    for(let btn of document.querySelectorAll('#answers-button button')) {
        if (btn.value !== uniqQuestion.corectAnswer) {
            document.querySelector(`button[name="${btn.value}"]`).remove();
        }
    }
    disabledButton(btnCallFriend);
}

const renderQuestion = (question) => {
    const btns = question.answer.map((answer, i) => `<button name="${answerMap[i]}" value="${answerMap[i]}" class="">${answer}</button>`);
    
    questionWrapper.innerHTML = `<div id="question">${question.question}</div>
        <div id="answers-button">
            ${btns.join('')}
        </div>
        <div id="explanation" class="hidden">${question.explanation}</div>`;
};

function getRandonNum(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function getNextQuestion(arr) {
    uniqQuestion = getRandonNum(arr);
    countTwo = 0;
    while (uniqArr.includes(uniqQuestion.question)) {
        uniqQuestion = getRandonNum(arr);
    }
    uniqArr.push(uniqQuestion.question);
    //заповнюємо питання
    renderQuestion(uniqQuestion);
    const exp = document.querySelector('#explanation');

    for(let btn of document.querySelectorAll('#answers-button button')) {
        
        btn.addEventListener('click', (event) => {

                if (event.target.value === uniqQuestion.corectAnswer) {
                    event.target.className = 'correct';
                    count += 1;
                    sums[count - 2].classList.add('win');
                    if((count - 1) === 5) {
                        info.innerHTML = 'Ви виграли першу незгораєму сумму 1000';
                    } else if((count - 1) === 10) {
                        info.textContent = 'Ви виграли другу незгораєму сумму 50 000';
                    } else if((count - 1) === 15) {
                        info.textContent = 'Ви переможець!Ви виграли 1 000 000';
                        hide(nextButton);
                        show(startButton);
                    } else {
                        info.textContent = getRandonNum(randomInfo);
                    }
                    if(count < 16) {
                        show(nextButton);
                        hide(exp);
                    }else {
                        disabledButton(btnFifty);
                        disabledButton(btnCallFriend);
                    }
                } 
                else {
                    event.target.className = 'incorrect';
                    if((count - 1) < 5) {
                        info.textContent = 'Ви програли. Спробуйте ще!'
                    } else if((count - 1) < 10){
                        info.textContent = 'Ваш виграш 1000!';
                    } else{
                        info.textContent = 'Ваш виграш 50 000!';
                    }
                    show(startButton);
                    disabledButton(nextButton);
                    disabledButton(btnCallFriend);
                    disabledButton(btnFifty);
                };
                
                show(exp);
                clearInterval(timerId);
        
            for(let unClickButton of document.querySelectorAll('#answers-button button')) {
                
                disabledButton(unClickButton);
                
            };

        })
    }

    if(uniqArr.length === 5) {
        uniqArr = [];
    }
    return uniqQuestion;
};

function removeAllClasses(){
    for(let btn of document.querySelectorAll('#answers-button button')){
        btn.classList.remove('correct', 'incorrect');
        enabledButton(btn);
    }
};

function disabledButton(button) {
    button.setAttribute('disabled', '');
};

function enabledButton(button) {
    button.removeAttribute('disabled');
};

function hide(element) {
    element.classList.add("hidden");
};

function show(element) {
    element.classList.remove("hidden");
};
