// Задание 1. Необходимо пользователя попросить ввести температуру в градусах Цельсия, 
// преобразовать введенное пользователем значение в соответствующую температуру 
// в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.

function task1() {
    const tempC = prompt("Введите температуру в Цельсиях");
    let tempF = (9 / 5) * tempC + 32;
    tempF = parseFloat(tempF.toFixed(2));
    alert(`Цельсий: ${tempC}, Фаренгейт: ${tempF}`);
}

// Задание 2. Cоздать функцию greeting, которая принимает в качестве аргумента 
// имя человека и выводит приветствие, используя переданное ей имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, 
// передав туда полученное от пользователя значение
function task2() {

    function greeting(name) {
        alert(`Привет, ${name}!`);
    }
    const name = prompt("Введите Ваше имя");
    greeting(name);
}