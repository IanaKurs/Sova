// $(document).ready(function () {
//   // Обработка отправки формы
//   $("form[name='myForm']").on("submit", function (e) {
//     e.preventDefault(); // отменяем стандартную отправку формы

//     const mood = $('input[name="mood"]:checked').val();
//     const extraMood = $('input[name="extraMood"]:checked').val();
//     const reason = $("#emotions").val();

//     if (!mood || !extraMood || !reason) {
//       showModal("Ошибка", "Пожалуйста, заполните все поля!");
//       return;
//     }

//     // Очистить форму
//     this.reset();

//     // Отправить данные
//     createNewRecord(mood, extraMood, reason);
//   });

//   // Закрытие модального окна
//   $(".modal__close-button").click(function () {
//     $("#bookModal").removeClass("modal_active");
//   });
// });
// function escapeHtml(text) {
//   return text
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

// async function createNewRecord(curmood, curextraMood, curreason) {
//   try {
//     const response = await fetch(
//       "http://46.149.66.116:8080/api/records/newRecord",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mood: curmood,
//           extraMood: curextraMood,
//           reason: curreason,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Ошибка при создании записи: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("Ответ от сервера:", result);

//     const modalTitle = result.name || "Рекомендация";
//     const modalContent = `
//       <div class="record-response">
//       <p><strong>Настроение:</strong> ${escapeHtml(result.mood)}</p>
//       <p><strong>Совет:</strong><br>${escapeHtml(result.content)}</p>
//       </div>
//     `.trim();

//     showModal(modalTitle, modalContent);
//   } catch (error) {
//     console.error(error);
//     showModal("Ошибка", "Не удалось создать запись. Попробуйте позже.");
//   }
// }

// // Показ модального окна
// function showModal(title, content) {
//   $("#modalTitle").text(title);
//   $("#modalContent").html(content);
//   $("#bookModal").addClass("modal_active");
// }
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
