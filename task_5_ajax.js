/*
Задание 5.

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://jsonplaceholder.typicode.com/photos?_page=0&_limit=5, где GET-параметр _page — это число из первого input, а GET-параметр _limit — это введённое число второго input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://jsonplaceholder.typicode.com/photos?_page=5&_limit=7
После получения данных вывести список картинок на экран.

Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).

*/

const letterNumber = document.querySelector(".input_letter_number");
const letterLimit = document.querySelector(".input_letter_limit");
const btnRequest = document.querySelector(".box_request");
const outNumber = document.querySelector(".result_out_number");
const outLimit = document.querySelector(".result_out_limit");
const imgResult = document.querySelector(".img_server");
let answer = new Object();
btnRequest.addEventListener("click", () => {
  if (Number(letterNumber.value) >= 1 && Number(letterNumber.value) <= 10) {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${letterNumber.value}&_limit=${letterLimit.value}`
    ).then((data) => {
      answer = data.url;
      console.log(answer);
    });
    // console.log(`${letterNumber.value} в диапазоне от 1-10`);
  } else {
    outNumber.innerHTML = "«Номер страницы вне диапазона от 1 до 10»";
    setTimeout(() => {
      outNumber.innerHTML = "";
      outLimit.innerHTML = "";
    }, "2000");
    clearTimeout();
    console.log(typeof Number(letterNumber.value));
    console.log(typeof Number(letterLimit.value));
  }

  if (Number(letterLimit.value) > 1 && Number(letterLimit.value) < 10) {
  } else {
    outLimit.innerHTML = "«Лимит вне диапазона от 1 до 10»";
    setTimeout(() => {
      outNumber.innerHTML = "";
      outLimit.innerHTML = "";
    }, "2000");
    clearTimeout();
  }

  if (
    Number(letterNumber.value) == !isNaN &&
    Number(letterLimit.value) == !isNaN
  ) {
    outNumber.innerHTML = "«Номер страницы вне диапазона от 1 до 10»";
    outLimit.innerHTML = "«Лимит вне диапазона от 1 до 10»";
    outNumber.innerHTML = "";
    outLimit.innerHTML = "";
    letterNumber.value = "";
    letterLimit.value = "";
    console.log(Number(letterNumber.value));
    console.log(Number(letterLimit.value));
  }

  if (letterNumber.value == "" || letterLimit.value == "") {
    console.log("введите число");
  }

  letterNumber.value = "";
  letterLimit.value = "";
});
