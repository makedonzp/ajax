/*
Задание 4

Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL  https://dummyimage.com/100x300/, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://dummyimage.com/150x200/.
После получения данных вывести ниже картинку на экран.
*/

let inputWidth = document.querySelector(".input_width");
let inputHeight = document.querySelector(".input_height");
let btnCheck = document.querySelector(".box_result");
let imageResult = document.querySelector(".img_server");
let out = document.querySelector(".result_out");

btnCheck.addEventListener("click", () => {
  if (
    (inputWidth.value >= 100 && inputWidth.value <= 300,
    inputHeight.value >= 100 && inputHeight.value <= 300)
  ) {
    fetch(
      `https://dummyimage.com/${inputWidth.value}x${inputHeight.value}/`
    ).then((data) => {
      for (let key in data) {
        imageResult.src = data.url;
      }
    });
    out.innerHTML = "";
  } else {
    out.innerHTML = "«одно из чисел вне диапазона от 100 до 300»";
    imageResult.src = "/images/images.jpeg";
  }
  inputWidth.value = "";
  inputHeight.value = "";
});
