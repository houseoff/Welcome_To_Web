create table students (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT
);

insert into students 
values
  (1, "Женя",  18, "г. Москва"),
  (2, "Маша",  20, "г. Хабаровск"),
  (3, "Паша",  22, "г. Москва"),
  (4, "Саша",  34, "г. Санкт-Петербург"),
  (5, "Глаша", 23, "г. Люберцы"),
  (6, "Миша",  17, "г. Москва");

select name from students where age > 17 AND age < 30 AND address = "г. Москва";