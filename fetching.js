$(document).ready(function () {
  // Обработка отправки формы
  $("form[name='myForm']").on("submit", function (e) {
    e.preventDefault();

    const mood = $('input[name="mood"]:checked').val();
    const extraMood = $('input[name="extraMood"]:checked').val();
    const reason = $("#emotions").val();

    if (!mood || !extraMood || !reason) {
      showFormModal("Ошибка", "Пожалуйста, заполните все поля!");
      return;
    }

    this.reset(); // очистка формы
    createNewRecord(mood, extraMood, reason);
  });

  // Закрытие модального окна формы
  $(".modal__close-button1").click(function () {
    $("#bookModal1").removeClass("modal_active");
  });

  // Закрытие по клику вне окна
  window.addEventListener("click", function (e) {
    if (e.target.id === "bookModal1") {
      $("#bookModal1").removeClass("modal_active");
    }
  });
});
function clearForm() {
  // Снять выбор у всех радиокнопок в группах mood и extraMood
  document
    .querySelectorAll('input[name="mood"]')
    .forEach((el) => (el.checked = false));
  document
    .querySelectorAll('input[name="extraMood"]')
    .forEach((el) => (el.checked = false));

  // Очистить текстовое поле input[type="text"] (id="emotions")
  const textInput = document.getElementById("emotions");
  if (textInput) {
    textInput.value = "";
  }
}

// Отправка записи
async function createNewRecord(curmood, curextraMood, curreason) {
  try {
    const response = await fetch(
      "http://46.149.66.116:8080/api/records/newRecord",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: curmood,
          extraMood: curextraMood,
          reason: curreason,
        }),
      }
    );

    if (!response.ok)
      throw new Error(`Ошибка при создании записи: ${response.status}`);
    const result = await response.json();

    const modalTitle = result.name || "Рекомендация";
    const modalContent = `
      <p><strong>Настроение:</strong> ${result.mood}</p>
      <p><strong>Совет:</strong> ${result.content}</p>
    `;

    showFormModal(modalTitle, modalContent);
  } catch (error) {
    console.error(error);
    showFormModal("Ошибка", "Не удалось создать запись. Попробуйте позже.");
  }
}

// Показ модального окна формы
function showFormModal(title, content) {
  $("#modalTitle1").text(title);
  $("#modalContent1").html(content);
  $("#bookModal1").addClass("modal_active");
}
