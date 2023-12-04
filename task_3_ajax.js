/*
Задание 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://jsonplaceholder.typicode.com/photos?_limit=5, где get-параметр limit — это введённое число.
*/

let inputIncome = document.querySelector(".input_enter_value");
let buttonCheck = document.querySelector("button");
let out = document.querySelector(".result_out");
let img_server = document.querySelector(".image_from_server");
let img = document.querySelector("#img_server");

buttonCheck.addEventListener("click", function () {
  let param = Number(inputIncome.value);
  // console.log(param);
  if (inputIncome.value === "") {
    out.innerHTML = "Введите число";
    // console.clear();
  } else if (
    Number(inputIncome.value) >= 0 &&
    Number(inputIncome.value) <= 10
  ) {
    out.innerHTML = "в диапазоне от 0-10";
    xhrRequest(Number(inputIncome.value));
    // console.log(param);
  } else {
    out.innerHTML = "«число вне диапазона от 1 до 10»";
  }
  inputIncome.value = "";
});

function xhrRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "get",
    `https://jsonplaceholder.typicode.com/photos?_limit=${Number(
      inputIncome.value
    )}`
  );
  if (Number(inputIncome.value) == 8) {
    xhr.open("get", `https://jsonplaceholder.typicode.com/photos?_limit=5`);
  }
  xhr.onload = function () {
    let data = JSON.parse(xhr.response);
    // console.log(data);
    // console.log(Number(inputIncome.value));
    img.src = `${data[Number(inputIncome.value)].thumbnailUrl}`;
  };

  xhr.send();
}
