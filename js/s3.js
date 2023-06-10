// Задача 2. Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввёл пользователь
// Вывод: результат сложения чисел 5 и 2 равен 7
function task1() {

    function sum(a, b) {
        return a + b;
    }

    const first  = Number.parseFloat(prompt("Введите 1-ое число: "));
    const second = Number.parseFloat(prompt("Введите 2-ое число: "));
    alert(`Результат сложения чисел ${first} и ${second} равен ${sum(first, second)}`);
}

// Задание 4. Вывести на экран в диалоговом окне текст с сообщением: "Вам хорошо живется?" и кнопками "ОК" и "Отмена"
// При нажатии на кнопку "ОК" вывести в диалоговом окне текст с сообщением "Тогда мы идем к Вам!"
// При нажатии на кнопку "Отмена" вывести сообщение: "Ну Вы держитесь там!"
function task4() {
    if (confirm("Вам хорошо живется?")) text = "Тогда мы идем к Вам!";
    else                                text = "Ну Вы держитесь там!";
    alert(text);
}

// Задача 5. Перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно
function task5() {

    function getCost(product, cost) {
        alert(`${product} стоят ${cost} руб./ кг.`);
    }

    product = prompt("Введите название продукта");
    switch (product) {
        case "Мандарины":
            getCost(product, 100);
            break;
        case "Бананы":
        case "Груши":
            getCost(product, 70);
            break;
        default:
            alert("Нет такого продукта");
    }
}

// Задача 6. Функция getMaxEvenElement принимает массив с целыми числами.
// Необходимо реализовать функцию так, чтобы она возвращала значение большего элемента, массива,
// который записан в четном индексе, включая 0
function task6() {

    function getMaxEvenElement(arr) {
        let max = arr[0];
        for (i = 2; i < arr.length; i += 2) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }

    alert(getMaxEvenElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
}

// Задача с реального собеседования
// Один покупатель старинных уникальных часов хочет приобрести для музея
// двое часов. В магазине у хозяйки есть n разных часов с соответствующими
// ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой бюджет.
// Выяснить, получится ли это
function task7() {

    function f(clockArr, money) {
        let sum = 0;
        for (i = 0; i < clockArr.length - 1; i++) {
            for (j = i + 1; j < clockArr.length; j++) {
                sum = clockArr[i] + clockArr[j]; 
                sum = parseFloat(sum.toFixed(2));
                if (sum == money) return true;
            }
        }
        return false;
    }

    alert(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3));
}
