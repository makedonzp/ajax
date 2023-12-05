/*
Задание 1.

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

*/
let xmlString = `<?xml version="1.0" encoding="UTF-8" ?>
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const domParser = new DOMParser();

const xmlDOM = domParser.parseFromString(xmlString, "text/xml");

let list = [{}, {}];

const student = xmlDOM.querySelectorAll("student");
const first = xmlDOM.querySelectorAll("first");
const surname = xmlDOM.querySelectorAll("second");
const name = xmlDOM.querySelectorAll("name");
const age = xmlDOM.querySelectorAll("age");

student.forEach((elem) => {
  list[0].name =
    student[0].querySelector("first").textContent +
    " " +
    student[0].querySelector("second").textContent;
  list[0].age = student[0].querySelector("age").textContent;
  list[0].prof = student[0].querySelector("prof").textContent;
  list[0].lang = student[0].querySelector("name").getAttribute("lang");

  list[1].name =
    student[1].querySelector("first").textContent +
    " " +
    student[1].querySelector("second").textContent;
  list[1].age = student[1].querySelector("age").textContent;
  list[1].prof = student[1].querySelector("prof").textContent;
  list[1].lang = student[1].querySelector("name").getAttribute("lang");
});
console.log(list);
