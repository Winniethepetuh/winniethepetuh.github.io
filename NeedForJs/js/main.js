const score       =   document.querySelector('.score'), // Достижения
      bestScore   =   document.querySelector('.best-score'), // Лучшее достижение
      start       =   document.querySelectorAll('.start'), // Начало
      startEasy   =   document.querySelector('.start-easy'), // Константа для settings.speed(Легкий)
      startNormal =   document.querySelector('.start-normal'), // Константа для settings.speed(Средний)
      startHard   =   document.querySelector('.start-hard'), // Константа для settings.speed(Сложный)
      gameArea    =   document.querySelector('.game-area'), // Игровое поле
      car         =   document.createElement('div'), // создание машинки
      losing      =   document.querySelector('.losing'), // экран проигрыша
      sound       =   document.querySelector('.audio'), // музыка для игры
      soundDie    =   document.querySelector('.audio-die'); // музыка для экрана проигрыша 
      


car.classList.add('car'); // добавление класса переменной "car"




// Константа с свойствами
const keys = { // стрелки
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false, 
    ArrowRight: false
} 
const settings = { // настройка для игры
    start: false,
    score: 0,
    speed: 3,
    traffic: 4
}
// Конец константы с свойствами



// Функции
const settingsEasy = () => {
    settings.speed = 4;
}
const settingsNormal = () => {
    settings.speed = 6;
}
const settingsHard = () => {
    settings.speed = 8;
}
const playSound = () => { // старт музыки
    sound.play();
}
const pauseSound = () => { // стоп музыки
    sound.pause();
}
const playSoundDie = () => { // старт музыки после проигрыша
    soundDie.play();
}
const pauseSoundDie = () => { // стоп музыки после проигрыша 
    soundDie.pause();
}
const getQuantityElements = heightElement => {
    return document.documentElement.clientHeight / heightElement + 1;
}
const startGame = () => { //Функция для события "click"
    start.forEach(function(i) { // добавление класса к "start"
        i.classList.add('hide')
    })
    // стили для игрового поля
    gameArea.style.display = 'block';
    gameArea.innerHTML = '';
    // стили для очков
    score.style.display = 'block';
    score.classList.remove('animated', 'pulse');
    score.style.color = '#000';
    // после проигрыша игрок нажимает "start", это убирает экран проигрыша
    losing.style.display = 'none';
    // появление инструкции внизу справо
    document.querySelector('.keys').style.display = 'inline-block';
    // Стандартное место появление машины
    car.style.left   = "150px";
    car.style.bottom = "15px";
    car.style.top    = "auto";


    for (let i = 0; i < getQuantityElements(100); i++) { // белая линия по середине 
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = (i * 100) + 'px';
        line.y = i * 100;
        gameArea.appendChild(line)
    }

    for(let i = 0; i < getQuantityElements(100 * settings.traffic); i++) { // появление других машин для траффика
        const enemy       = document.createElement('div'),
              enemyRandom = ['enemy0', 'enemy1', 'enemy2'],
              enemyLength = "enemy" + Math.floor(Math.random() * enemyRandom.length);
        enemy.classList.add(enemyLength)
        enemy.y = -100 * settings.traffic * (i+1);
        enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        enemy.style.top = enemy.y + 'px';
        gameArea.appendChild(enemy);
    }
    
    gameArea.appendChild(car); // добавление игрока в поле

    settings.x     = car.offsetLeft; //
    settings.y     = car.offsetTop;
    settings.start = true;
    settings.score = 0;
    car.style.left = (gameArea.offsetWidth / 2) - (car.offsetWidth / 2) + "px";
    requestAnimationFrame(playGame);

}
const playGame = () => {
    if (settings.start) {
        if (settings === start) {
            keys.ArrowUp = true;
            keys.ArrowDown = true;
            keys.ArrowLeft = true;
            keys.ArrowRight = true;
        }

        settings.score += settings.speed;
        if (settings.speed == 4) { // чем больше уровень сложности тем больше очков
            const best = settings.score;
            score.textContent     = 'Очки: ' + best;
            bestScore.textContent = 'Лучший Результат ' + best;
        } else if (settings.speed == 6) {
            const best = (settings.score * 2);
            score.textContent = 'Очки: ' + best;
            bestScore.textContent = 'Лучший Результат ' + best;
        } else if (settings.speed == 8) {
            const best = (settings.score * 3);
            score.textContent = 'Очки: ' + best;
            bestScore.textContent = 'Лучший Результат ' + best;
        }

        moveRoad();
        moveEnemy();
        // Ограничения игрового поля
        if (keys.ArrowLeft && settings.x > 25) {
            settings.x -= settings.speed
        }

        if (keys.ArrowRight && settings.x < (gameArea.offsetWidth - 25)) {
            settings.x += settings.speed
        }

        if (keys.ArrowUp && settings.y > 0) {
            settings.y -= settings.speed
        }

        if (keys.ArrowDown && settings.y < (gameArea.offsetHeight - 121)) {
            settings.y += settings.speed
        }
        car.style.left = settings.x + 'px'
        car.style.top  = settings.y + 'px'

        requestAnimationFrame(playGame);
    }
    
    
}
const startRun = event => { // включение клавиш
    event.preventDefault();
    keys[event.key] = true;
}
const stopRun = event => { // Выключение клавиш
    event.preventDefault();
    keys[event.key] = false;
}
const moveRoad = () => { // функция для появления линий
    let lines = document.querySelectorAll('.line');
    lines.forEach(function(line) {
        line.y += settings.speed;
        line.style.top = line.y + 'px';

        if (line.y > document.documentElement.clientHeight) {
            line.y = -100;
        }
    });
}
const moveEnemy = () => { // функция проверки столкновения бота и игрока
    let enemy  = document.querySelectorAll('.enemy1'),
        enemy2 = document.querySelectorAll('.enemy0');
        enemy3 = document.querySelectorAll('.enemy2');

//это один и тот же код для разных ботов, если можете переписать короче, пишите и отправьте мне на почту код: norlanoraz95@gmail.com
    enemy.forEach(function(item){ // столкновение бота и игрока
        let carRect   = car.getBoundingClientRect(),
            enemyRect = item.getBoundingClientRect();

        if (carRect.top <= enemyRect.bottom && 
            carRect.right >= enemyRect.left &&
            carRect.left <= enemyRect.right &&
            carRect.bottom >= enemyRect.top) {
            settings.start = false;
            
            document.querySelector('.keys').style.display = 'none';
            losing.style.display = 'inline-block';
            pauseSound();
            playSoundDie();

            start.forEach(function(i) { // стили для кнопок "start"
                i.style.zIndex = '9999999';
            })
            start.forEach(function(i) {
                i.classList.remove('hide');
            })
            start.forEach(function(i) {
                i.classList.add('before-losing');
            })

            // стили для очков
            score.style.color = 'red';
            score.style.zIndex = "999999";
            score.classList.add('animated', 'pulse');
        }

        item.y += settings.speed * 1.5;
        item.style.top = item.y + 'px';
        if (item.y > document.documentElement.clientHeight) {
            item.y = -100 * settings.traffic;
            item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        }         
    });
    
    enemy2.forEach(function(item){ // столкновение бота и игрока
        let carRect   = car.getBoundingClientRect(),
            enemyRect = item.getBoundingClientRect();

        if (carRect.top <= enemyRect.bottom && 
            carRect.right >= enemyRect.left &&
            carRect.left <= enemyRect.right &&
            carRect.bottom >= enemyRect.top) {
            settings.start = false;
            
            document.querySelector('.keys').style.display = 'none';
            losing.style.display = 'inline-block';
            pauseSound();
            playSoundDie();

            start.forEach(function(i) { // стили для кнопок "start"
                i.style.zIndex = '9999999';
            })
            start.forEach(function(i) {
                i.classList.remove('hide');
            })
            start.forEach(function(i) {
                i.classList.add('before-losing');
            })

            // стили для очков
            score.style.color = 'red';
            score.style.zIndex = "999999";
            score.classList.add('animated', 'pulse');
        }

        item.y += settings.speed * 1.5;
        item.style.top = item.y + 'px';
        if (item.y > document.documentElement.clientHeight) {
            item.y = -100 * settings.traffic;
            item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        }         
    });

    enemy3.forEach(function(item){ // столкновение бота и игрока
        let carRect   = car.getBoundingClientRect(),
            enemyRect = item.getBoundingClientRect();

        if (carRect.top <= enemyRect.bottom && 
            carRect.right >= enemyRect.left &&
            carRect.left <= enemyRect.right &&
            carRect.bottom >= enemyRect.top) {
            settings.start = false;
            
            document.querySelector('.keys').style.display = 'none';
            losing.style.display = 'inline-block';
            pauseSound();
            playSoundDie();

            start.forEach(function(i) { // стили для кнопок "start"
                i.style.zIndex = '9999999';
            })
            start.forEach(function(i) {
                i.classList.remove('hide');
            })
            start.forEach(function(i) {
                i.classList.add('before-losing');
            })

            // стили для очков
            score.style.color = 'red';
            score.style.zIndex = "999999";
            score.classList.add('animated', 'pulse');
        }

        item.y += settings.speed * 1.5; 
        item.style.top = item.y + 'px';
        if (item.y > document.documentElement.clientHeight) {
            item.y = -100 * settings.traffic;
            item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        }         
    });
}
// Конец функций


// Обработка событий
start.forEach(function(i) { // нажатие на легко, средне, сложно запускает функцию "startGame"
    i.addEventListener('click', startGame);
    i.addEventListener('click', playSound);
    i.addEventListener('click', pauseSoundDie);
})
startEasy.addEventListener('click', settingsEasy)
startNormal.addEventListener('click', settingsNormal)
startHard.addEventListener('click', settingsHard)
document.addEventListener('keydown', startRun); //нажатия на стрелки
document.addEventListener('keyup', stopRun); //опускание кнопок
// Конец обработки событий
