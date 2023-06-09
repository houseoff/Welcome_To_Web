# Домашнее задание к 5 семинару

## Задание 1. Проверить XML, правильно ли он составлен, не имеет ли он ошибок, если есть какие-либо недочеты, предоставьте правильный вариант
---

Исходная структура файла

    <user>
    <name>"Иван"</name>
    <surname>"Иванов"</surname>
    <patronymic>"Иванович"</patronymic>
    <age>"30"</age>
    <phone>"Москва"</phone>
    <birthplace>"+7 926 766 48 48"</birthplace>
    </user

Исправленная структура файла

    <?xml version="1.0" encoding="UTF-8"?>
    <user>
        <name>Иван</name>
        <surname>Иванов</surname>
        <patronymic>Иванович</patronymic>
        <age>30</age>
        <phone>+7 926 766 48 48</phone>
        <birthplace>Москва</birthplace>
    </user>

**Недочеты:**
1. Не был закрыт тег \<user\>
2. Кавычки в значениях свойств не нужны
3. Перепутаны значения свойств phone и birthplace

Придирки:
1. Отсутствовала табуляция (для читабельности)
2. Не была прописана служебная информация (версия XML и кодировка)

---
## Задача 2. Проверить JSON, правильно ли он составлен, не имеет ли он ошибок, если есть какие-либо недочеты, предоставьте правильный вариант
---

Исходная структура файла

    name: "Иван",
    surname: "Иванов",
    patronymic: "Иванович",
    age: "30",
    birthplace: "Москва",
    phone: +7 926 766 48 48,


Исправленная структура

    {
        "name": "Иван",
        "surname": "Иванов",
        "patronymic": "Иванович",
        "age": 30,
        "birthplace": "Москва",
        "phone": "+7 926 766 48 48"
    }

**Недочеты:**
1. Отсутствовали фигурные скобки
2. Имена свойств должны быть в кавычках
3. Числовой тип данных не нужно заключать в кавычки
4. После последнего свойства объекта не должна стоять запятая
5. Значение свойства "phone" должно быть заключено в кавычки для сохранения текущего формата номера, либо можно сменить формат номера на числовой и кавычки исключить (например, 79267664848 либо 89267664848 и т.п.)