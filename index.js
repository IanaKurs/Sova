import $ from "jquery";

var Link = function (href, name) {
  this.href = href;
  this.name = name;
  this.generateAnchor = function () {
    return $("<a href='" + this.href + "'>" + this.name + "</a>");
  };
};

var links = [new Link("", 1), new Link("", 2)];

for (var i = 0; i < links.length; i++) {
  var listElement = $("<li>Совет</li>").append(links[i].generateAnchor());
  $("ul.action").append(listElement);
}
document.getElementById("toBottom").addEventListener("click", function (event) {
  event.preventDefault(); // Предотвращаем переход по ссылке
  document.getElementById("forma").style.display = "none"; // Скрываем форму входа
  document.getElementById("container").style.display = "block";
  document.getElementById("list-naw").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("content_2").style.display = "none";
  document.getElementById("List_1").style.display = "none"; // Скрываем форму регистрации
  // Показываем форму входа
  // Показываем форму регистрации

  document.getElementById("static").style.display = "none"; // Скрываем текст ссылки для входа
  document.getElementById("static-1").style.display = "block";
  document.getElementById("new-title-2").style.display = "none";
  document.getElementById("new-title").style.display = "block"; // Показываем текст ссылки для входа
});
document
  .getElementById("button_naw")
  .addEventListener("click", function (event) {
    // event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById("container").style.display = "none"; // Скрываем форму регистрации
    document.getElementById("forma").style.display = "none";
    document.getElementById("list-naw").style.display = "none";
    document.getElementById("List_1").style.display = "block";
    document.getElementById("content_2").style.display = "block";
    document.getElementById("content").style.display = "none";
    // Показываем форму входа

    document.getElementById("static").style.display = "block";
    document.getElementById("new-title-2").style.display = "block"; // Показываем текст ссылки для регистрации
    document.getElementById("static-1").style.display = "none";
    document.getElementById("new-title").style.display = "none";
    // Скрываем текст ссылки для входа
  });
// Переключение на форму входа
document
  .getElementById("toBottom-1")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById("container").style.display = "none"; // Скрываем форму регистрации
    document.getElementById("forma").style.display = "block";
    document.getElementById("list-naw").style.display = "none"; // Показываем форму входа
    document.getElementById("List_1").style.display = "none";
    document.getElementById("static").style.display = "block"; // Показываем текст ссылки для регистрации
    document.getElementById("static-1").style.display = "none";
    document.getElementById("new-title-2").style.display = "none";
    document.getElementById("new-title").style.display = "block";
    document.getElementById("content").style.display = "none";
    document.getElementById("content_2").style.display = "none";

    // Скрываем текст ссылки для входа
  });
document
  .getElementById("new-title-1")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById("container").style.display = "none";
    document.getElementById("forma").style.display = "none"; // Скрываем форму регистрации
    document.getElementById("list-naw").style.display = "block";
    document.getElementById("List_1").style.display = "none"; // Показываем форму входа
    document.getElementById("content_2").style.display = "none";
    document.getElementById("static").style.display = "block";
    document.getElementById("new-title-2").style.display = "block"; // Показываем текст ссылки для регистрации
    document.getElementById("static-1").style.display = "none";
    document.getElementById("new-title").style.display = "none";
    document.getElementById("content").style.display = "block"; // Скрываем текст ссылки для входа
  });
// Обработчик для формы регистрации (пока просто предотвращаем отправку)
document.getElementById("forma").addEventListener("submit", function (event) {
  event.preventDefault(); // предотвращаем стандартное поведение формы
});
// Обработчик для формы входа (пока просто предотвращаем отправку)
document
  .getElementById("list-naw")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы
  });
document
  .getElementById("container")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // предотвращаем стандартное поведение формы
  });

const today = new Date();
const formattedDate = today.toISOString().substr(0, 10);
document.getElementById("dateInput").value = formattedDate;
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
const year = today.getFullYear();
document.getElementById("dateInput").value = `${year}-${month}-${day}`;
const dateElement = document.getElementById("dateInput");
dateElement.value = new Date().toISOString().split("T")[0];
dateElement.valueAsDate = new Date();
