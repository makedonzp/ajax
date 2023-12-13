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
const btnRequest = document.querySelector(".btn_request");
const outLimitText = document.querySelector(".result_out_number");
const outNumberText = document.querySelector(".result_out_limit");
const outText = document.querySelector(".out_text");
const imgResult = document.querySelector(".image_from_server");
const limitPlusNumber = document.querySelector(".limit_plus_number");

let answer = localStorage.getItem("lastResult")
  ? JSON.parse(localStorage.getItem("lastResult"))
  : [];
render(answer);
btnRequest.addEventListener("click", () => {
  if (
    Number(letterNumber.value) == "" ||
    (Number(letterLimit.value) == "", Number(letterNumber.value) <= 0) ||
    Number(letterLimit.value) <= 0
  ) {
    outText.innerHTML = `вы ввели либо "0" либо буквы, нужно число в диапазоне 1-10`;
    imgResult.innerHTML = "";
  } else if (
    Number(letterNumber.value) >= 1 &&
    Number(letterLimit.value) >= 1 &&
    Number(letterNumber.value) <= 10 &&
    Number(letterLimit.value) <= 10
  ) {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${Number(
        letterNumber.value
      )}&_limit=${Number(letterLimit.value)}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        answer = data;
        render(answer);
      });
    outText.innerHTML = "в диапазоне от 0-10";
  } else {
    letterNumber.value = "";
    letterLimit.value = "";
  }
});

function render(data) {
  imgResult.innerHTML = "";
  letterNumber.value = "";
  letterLimit.value = "";
  for (let i = 0; i < data.length; i++) {
    imgResult.innerHTML += `<img src="${data[i].thumbnailUrl}" alt="image" />`;
  }
  localStorage.setItem("lastResult", JSON.stringify(data));
}
