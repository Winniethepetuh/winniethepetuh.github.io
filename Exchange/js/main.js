document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const customer          =    document.getElementById('customer'), // для заказчика button
          freelancer        =    document.getElementById('freelancer'), // для фрилансера
          blockCustomer     =    document.getElementById('block-customer'),  // форма заполнения заказчика
          blockFreelancer   =    document.getElementById('block-freelancer'), // форма заполнения фрилансера
          blockChoise       =    document.getElementById('block-choice'), // приветственный текст в начале
          btnExit           =    document.getElementById('btn-exit'), // кнопка закрывающая формы для пользователей
          formCustomer      =    document.getElementById('form-customer'); // форма заказчика

    // функции
    const deletChoise = () => blockChoise.style.display = 'none'; // удаление приветсвенного текста
    const exit        = () => btnExit.style.display     = 'inline-block'; // появление кнопки для перемещения на приветственный текст
    // конец функции

          
    // события
    customer.addEventListener('click', () => { 
        blockCustomer.style.display   = 'block'; // появление формы заказчика
        deletChoise();
        exit();
    });
    freelancer.addEventListener('click', () => {
        blockFreelancer.style.display = 'block'; // появление формы фрилансера
        deletChoise();
        exit();
    });
    btnExit.addEventListener('click', () => {
        btnExit.style.display         = 'none';
        blockFreelancer.style.display = 'none';
        blockCustomer.style.display   = 'none';
        blockChoise.style.display     = 'block';
    });
    formCustomer.addEventListener('submit', event => {
        event.preventDefault();
        for(const elem of formCustomer.elements) {
            if(elem.tagName === 'INPUT') {
                console.log(elem)
            }
        }
    });
    // конец событии
})