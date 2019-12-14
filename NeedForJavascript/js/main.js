const score     =   document.querySelector('.score'), // Достижения
      start     =   document.querySelector('.start'), // Начало
      gameArea  =   document.querySelector('.game-area'), // Игровое поле
      car       =   document.createElement('div'); 


car.classList.add('car')




// Константа с несколькими значениями
const keys = {
    ArrowUp:    false,
    ArrowDown:  false,
    ArrowRight: false,
    ArrowLeft:  false
}
const settings = {
    start: false,
    score: 0,
    speed: 5,
    traffic: 4
}
// Конец константы с несколькими значениями


// Функции
const getQuantityElements = heightElement => {
    return document.documentElement.clientHeight / heightElement + 1;
}
const startGame = () => {
    start.classList.add('hide');
    gameArea.style.display = 'inline-block';
    document.querySelector('.keys').style.display = 'inline-block';

    for (let i = 0; i < getQuantityElements(100); i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = (i * 100) + 'px';
        line.y = i * 100;
        gameArea.appendChild(line)
    }

    for(let i = 0; i < getQuantityElements(100 * settings.traffic); i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = -100 * settings.traffic * (i+1);
        enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        enemy.style.top = enemy.y + 'px';
        gameArea.appendChild(enemy);
    }

    document.querySelector('.game-area').style.display = 'block';
    settings.start = true;
    settings.x     = car.offsetLeft;
    settings.y     = car.offsetTop;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}
const playGame = () => {
    if (settings.start) {
        moveRoad();
        moveEnemy();
        if (keys.ArrowLeft && settings.x > 0) {
            settings.x -= settings.speed
        }

        if (keys.ArrowRight && settings.x < (gameArea.offsetWidth - car.offsetWidth)) {
            settings.x += settings.speed
        }

        if (keys.ArrowUp && settings.y > 0) {
            settings.y -= settings.speed
        }

        if (keys.ArrowDown && settings.y < (gameArea.offsetHeight - 101)) {
            settings.y += settings.speed
        }
        car.style.left = settings.x + 'px'
        car.style.top  = settings.y + 'px'

        requestAnimationFrame(playGame);
    }
    
    
}
const startRun = event => {
    event.preventDefault();
    keys[event.key] = true;
}
const stopRun = event => {
    event.preventDefault();
    keys[event.key] = false;
}
const moveRoad = () => {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function(line) {
        line.y += settings.speed;
        line.style.top = line.y + 'px';

        if (line.y > document.documentElement.clientHeight) {
            line.y = -100;
        }
    });
}
const moveEnemy = () => {
    let enemy = document.querySelectorAll('.enemy');
    enemy.forEach(function(item){
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
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun)
// Конец обработки событий

