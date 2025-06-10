$(function () {
  // Загрузить все советы (пример с заглушкой)
  async function loadAllAdvice() {
    try {
      // Замените URL на ваш реальный
      const response = await fetch(
        "http://46.149.66.116:8080/api/advice?mood=default"
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      const advices = await response.json();
      renderAdviceList(advices);
    } catch (e) {
      console.error(e);
      $(".list_naw .action1").html("<li>Ошибка при загрузке данных.</li>");
    }
  }

  function renderAdviceList(list) {
    const $list = $(".list_naw .action1");
    $list.empty();

    list.forEach((advice) => {
      const item = $(`
        <li>
          <a href="#" class="advice-link" data-title="${advice.name}" data-content="${advice.content}" style="color: inherit; text-decoration: none;">
            ${advice.name}
          </a>
        </li>
      `);
      $list.append(item);
    });
  }
  $('select[name="mood_filter"]').on("change", function () {
    const selected = $(this).val();
    if (selected === "all") {
      loadAllAdvice();
    }
  });

  // Делегируем событие клика на ссылки с советами
  $(".list_naw").on("click", ".advice-link", function (e) {
    e.preventDefault();
    const title = $(this).data("title");
    const content = $(this).data("content");
    showModal(title, content);
  });

  function showModal(title, content) {
    $("#modalTitle").text(title);
    $("#modalContent").text(content);
    $("#bookModal").addClass("modal_active");
  }

  function closeModal() {
    $("#bookModal").removeClass("modal_active");
  }

  // Закрываем модалку по кнопке
  $("#modalCloseBtn").on("click", closeModal);

  // Закрываем модалку по клику вне содержимого
  $("#bookModal").on("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  // Запускаем загрузку советов
  loadAllAdvice();
});
