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
  document.getElementById("list-naw").style.display = "none"; // Скрываем форму регистрации
  // Показываем форму входа
  // Показываем форму регистрации

  document.getElementById("static").style.display = "none"; // Скрываем текст ссылки для входа
  document.getElementById("static-1").style.display = "block";
  document.getElementById("new-title-2").style.display = "none";
  document.getElementById("new-title").style.display = "block"; // Показываем текст ссылки для входа
});
// Переключение на форму входа
document
  .getElementById("toBottom-1")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById("container").style.display = "none"; // Скрываем форму регистрации
    document.getElementById("forma").style.display = "block";
    document.getElementById("list-naw").style.display = "none"; // Показываем форму входа

    document.getElementById("static").style.display = "block"; // Показываем текст ссылки для регистрации
    document.getElementById("static-1").style.display = "none";
    document.getElementById("new-title-2").style.display = "none";
    document.getElementById("new-title").style.display = "block"; // Скрываем текст ссылки для входа
  });
document
  .getElementById("new-title-1")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    document.getElementById("container").style.display = "none";
    document.getElementById("forma").style.display = "none"; // Скрываем форму регистрации
    document.getElementById("list-naw").style.display = "block"; // Показываем форму входа

    document.getElementById("static").style.display = "block";
    document.getElementById("new-title-2").style.display = "block"; // Показываем текст ссылки для регистрации
    document.getElementById("static-1").style.display = "none";
    document.getElementById("new-title").style.display = "none"; // Скрываем текст ссылки для входа
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
