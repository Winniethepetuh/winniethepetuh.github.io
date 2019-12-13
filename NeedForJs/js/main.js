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
    speed: 3,
    score: 0
}
// Конец константы с несколькими значениями








// Функции
const startGame = () => {
    start.classList.add('hide');
    settings.start = true;
    gameArea.appendChild(car)
    requestAnimationFrame(playGame);
}
const playGame = () => {
    console.log('Play Game!');

    if (settings.start === true) {
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
// Конец функций








// Обработка событий
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun)
// Конец обработки событий

