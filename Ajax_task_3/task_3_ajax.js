/*
Задание 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://jsonplaceholder.typicode.com/photos?_limit=5, где get-параметр limit — это введённое число.
*/

let inputIncome = document.querySelector(".input_enter_value");
let buttonCheck = document.querySelector(".button");
let out = document.querySelector(".result_out");
let outText = document.querySelector(".out_text");

buttonCheck.addEventListener("click", function () {
  if (inputIncome.value === "") {
    outText.innerHTML = "Введите число";
    clean();
  } else if (
    Number(inputIncome.value) >= 0 &&
    Number(inputIncome.value) <= 10
  ) {
    outText.innerHTML = "в диапазоне от 1-10";
    clean();
    xhrRequest(Number(inputIncome.value));
  } else {
    outText.innerHTML = "«число вне диапазона от 1 до 10»";
    clean();
  }
  inputIncome.value = "";
});

function xhrRequest(number) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "get",
    `https://jsonplaceholder.typicode.com/photos?_limit=${number}`
  );
  if (Number(inputIncome.value) == 8) {
    xhr.open("get", `https://jsonplaceholder.typicode.com/photos?_limit=5`);
  }
  xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    for (let i = 0; i < data.length; i++) {
      out.innerHTML += `<img src="${data[i].thumbnailUrl}" alt="image" />`;
    }
  };
  xhr.send();
}

function clean() {
  out.innerHTML = "";
}
