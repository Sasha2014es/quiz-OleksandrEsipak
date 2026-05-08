document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
         {
            
            question: "Як розшифровується CSGO?",
            answers: ["Counter Strike: Global Offensive", "Combat Strike: Global Ops", "Counter Squad: Game Online", "Critical Strike: Global Operation"],
            correct: 0
        },
        {
            
            question: "Скільки гравців у команді в стандартному матчі?",
            answers: ["4", "6", "3", "5"],
            correct: 3
        },
             {
            
            question: "Хто закладає бомбу?",
            answers: ["Counter terorist", "terrorist", "Двоє", "Ніхто"],
            correct: 1
        },
             {
            
            question: "Яка популярна карта з точками A і B?",
            answers: ["Mirage", "Inferno", "Dust II", "Усі варіанти правильні"],
            correct: 3
        },
             {
            
            question: "Яка стандартна зброя у контртерористів?",
            answers: ["Glock-18", "USP-S", "AK-47", "Desert Eagle"],
            correct: 1
        },
             {
            
            question: "Максимальна кількість грошей у грі?",
            answers: ["$12000", "$14000", "$16000", "20000"],
            correct: 2
        },
             {
            
            question: "Яка граната засліплює ворогів?",
            answers: ["Smoke", "HE Grenade", "Flashbang", "Molotov"],
            correct: 2
        },
             {
            
            question: "Яка снайперська гвинтівка вбиває з одного пострілу?",
            answers: ["Scout (SSG 08)", "AWP", "AUG", "SG 553"],
            correct: 1
        },
            
        {
        
            question: "Скільки часу потрібно для встановлення бомби?",
            answers: ["2 секунди", "3 секунди", "4 секунди", "5 секунд"],
            correct: 1
        },
        
        {
            question: "Режим, де зброя змінюється після кожного вбивства?",
            answers: ["Deathmatch", "Competitive", "Arms Race", "Wingman"],
            correct: 2
        },
        
        {
            question: "Скільки триває раунд у змагальному режимі?",
            answers: ["1 хвилина", "1 хв 30 сек", "2 хвилини", "2 хв 30 сек"],
            correct: 1
        },
        
        {
            question: "Скільки раундів у половині матчу?",
            answers: ["12", "15", "16", "10"],
            correct: 1
        },
        {
            
            question: "Як називається стратегія без закупки?",
            answers: ["Rush", "Eco", "Split", "Fake"],
            correct: 1
        },
        {
            question: "Хто з цих гравців вважається одним із найкращих в історії CS:GO?",
            answers: ["s1mple", "NiKo", "ZywOo", "Усі відповіді правильні"],
            correct: 3
        },
        
        {
            question: "Що таке “Major” у CS:GO?",
            answers: ["Звичайний турнір", "Найпрестижніший турнір від Valve", "Локальний чемпіонат", "Онлайн-ліга"],
            correct: 1
        },
        {
            
            question: "З якої країни команда Astralis?",
            answers: ["Швеція", "Данія", "Німеччина", "Франція"],
            correct: 1
        },
        {
            
            question: "Як називається рейтинг найкращих команд світу?",
            answers: ["Steam Rank", "HLTV Ranking", "Faceit Rank", "ESEA Rank"],
            correct: 1
        },
            
        {   
            question: "В якій команді зараз s1mple?",
            answers: ["BC", "NAVI", "G2", "FaZe"],
            correct: 0
        },
            
        {  
            question: "Коли відбувся мажор 2021?",
            answers: ["5 квітня", "26 жовтня", "10 квітня", "4 серпня"],
            correct: 1
        },
            
         {  
            question: "Коли закічилася підтримка csgo?",
            answers: ["4 лютого", "27 вересня", "21 червня", "1 квітня"],
            correct: 1
        },
         {
            
            question: "Хто виграв PGL Major Stockholm 2021?",
            answers: ["G2 Esports", "Natus Vincere", "Heroic", "Vitality"],
            correct: 1
        },
        {
            
            question: "Найкращий гравець 2021 за HLTV?",
            answers: ["ZywOo", "NiKo", "s1mple", "device"],
            correct: 2
        },
             {
            
            question: "Роль IGL?",
            answers: ["Снайпер", "Лідер", "Саппорт", "Entry"],
            correct: 1
        },
             {
            
            question: "Flash — що робить?",
            answers: ["Дим", "Підпал", "Засліплює", "Глушить звук"],
            correct: 2
        },
             {
            
            question: "AWP — це?",
            answers: ["SMG", "Rifle", "Sniper", "Pistol"],
            correct: 2
        },
             {
            
            question: "Clutch — це?",
            answers: ["Сейв", "Rush", "1vX виграш", "Еко"],
            correct: 2
        },
             {
            
            question: "Перший Major виграв?",
            answers: ["Fnatic", "NiP", "VP", "NaVi"],
            correct: 1
        },
             {
            
            question: "Bomb timer?",
            answers: ["30", "35", "40", "45"],
            correct: 2
        },
            
        {
        
            question: "Entry — це?",
            answers: ["Перший заходить", "Снайпер", "Лідер", "Коуч"],
            correct: 0
        },
        
        {
            question: "AWPer — це?",
            answers: ["Пістолетник", "Снайпер", "Entry", "Support"],
            correct: 1
        },
         {
            question: "Рік виходу CSGO?",
            answers: ["2010", "2012", "2026", "2013"],
            correct: 1
        },
        {
            question: "Найдешевша зброя?",
            answers: ["AK-47", "AWP", "Glock", "M4"],
            correct: 2
        },
        {
            question: "Що таке recoil?",
            answers: ["швидкість", "Приціл","віддача","перезарядка"],
            correct: 2
        },
        
        {
            question: "AK-47 коштує?",
            answers: ["2000", "2500", "2700", "3000"],
            correct: 1
        },
        {
            
            question: "Що таке aim?",
            answers: ["рух", "стрибок", "прицілювання", "захист"],
            correct: 2
        },
        {
            
            question: "Smoke",
            answers: ["Дим", "вибух", "вогонь", "світло"],
            correct: 0
        },
            
        {   
            question: "Flash",
            answers: ["шкода", "лікування", "засліплення", "дим"],
            correct: 2
        },
            
        {  
            question: "HE?",
            answers: ["шкода", "лікування", "дим", "засліплення"],
            correct: 0
        },
            
         {  
            question: "Molotov?",
            answers: ["вода", "вогонь", "дим", "світло"],
            correct: 1
        },
        {
            question: "Lurk?",
            answers: ["Самостійний гравець", "снайпер", "новачок", "командир"],
            correct: 0
        },
        
        {
            question: "MVP?",
            answers: ["Найкращий", "Найгірший", "новачок", "суддя"],
            correct: 0
        },
        {
            
            question: "Ping?",
            answers: ["швидкість пк", "затримка", "графіка", "FPS"],
            correct: 1
        },
        {
            question: "Retake?",
            answers: ["закладка", "втеча", "відбиття точки", "перезарядка"],
            correct: 3
        },
        
        {
            question: "Flick?",
            answers: ["повільний рух", "біг", "різкий постріл", "перезарядка"],
            correct: 1
        },
        {
            
            question: "За що дають гроші?",
            answers: ["Кілли", "раунди", "бомба", "все вище"],
            correct: 1
        },
        {
            
            question: "Full buy?",
            answers: ["без зброї", "повна закупка", "тільки пістолет", "ніж"],
            correct: 1
        },
            
        {   
            question: "Що важливіше?",
            answers: ["скіни", "командна гра", "гучність звуку", "випадковість"],
            correct: 1
        },
            
        {  
            question: "Spray?",
            answers: ["1 точний постріл", "стрільба без прицілу", "тривала стрільба", "кидання гранати "],
            correct: 2
        },
            
         {  
            question: "Мета контртерористів?",
            answers: ["Поставити бомбу", "знайти зброю", "захистити плент і знешкодити бомбу", "просто зробити більше фрагів"],
            correct: 2
        },
        {  
            question: "M4A4 використовується?",
            answers: ["контртерористів", "терористів", "обидві", "ніхто"],
            correct: 0
        },
            
        ]
       // Створення елементів
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');

    let questionIndex = 0;
    let score = 0;
    let timer = 15; // Таймер на 15 секунд
    const timerDisplay = document.querySelector('#timer');
    const scoreL = document.querySelector('#score-display');
    
    let interval; // Змінна для зберігання інтервалу

    // Функція для відображення запитання
    function showQuestion(question) {

        clearInterval(interval); // Скидаємо таймер
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);
    // Завдання 5 - Функція для переходу до наступного запитання
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
    // Завдання 4 - Перевірка відповіді
    function checkAnswer(button, i) {
        if (i == questions[questionIndex].correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        // Відключення кнопок після вибору відповіді
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        })
        // Таймер на 1 секунду
        setTimeout(nextQuestion, 1000);
    }


    // Завдання 7 - Відображення результату і статистики
    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Твій результат: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }
    // Завдання 3 - Керування екранами (JS)
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);


    // Завдання 6 - Таймер
    function startTimer() {
        timer = 15;
        timerDisplay.innerText = `Час: ${timer}`;
        scoreL.innerText = `Бали: ${score}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Час: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });

});
function createDollar() {
    const container = document.getElementById('money-container');
    const dollar = document.createElement('div');
    
    dollar.innerText = '⚔️'; // Можна замінити на '💰' або '💸'
    dollar.classList.add('dollar');
    
    // Випадкова позиція від 0 до 100% ширини екрана
    dollar.style.left = Math.random() * 100 + 'vw';
    
    // Випадкова тривалість падіння від 3 до 7 секунд
    const duration = Math.random() * 4 + 3;
    dollar.style.animationDuration = duration + 's';
    
    // Випадковий розмір (щоб була перспектива)
    dollar.style.fontSize = Math.random() * 20 + 20 + 'px';

    container.appendChild(dollar);

    // Видаляємо елемент після завершення анімації, щоб не перевантажувати пам'ять
    setTimeout(() => {
        dollar.remove();
    }, duration * 1000);
}

// Запускаємо створення доларів кожні 300 мс
setInterval(createDollar, 300);

