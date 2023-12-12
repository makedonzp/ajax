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

let list = [];

const student = xmlDOM.querySelectorAll("student");
const first = xmlDOM.querySelectorAll("first");
const surname = xmlDOM.querySelectorAll("second");
const name = xmlDOM.querySelectorAll("name");
const age = xmlDOM.querySelectorAll("age");

student.forEach((elem) => {
  list.push({
    name: `${elem.querySelector("first").textContent} ${
      elem.querySelector("second").textContent
    }`,
    age: elem.querySelector("age").textContent,
    prof: elem.querySelector("prof").textContent,
    lang: elem.querySelector("name").getAttribute("lang"),
  });
});
console.log(list);
