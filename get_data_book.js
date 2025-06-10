$(document).ready(function () {
  async function getBook(mood) {
    try {
      let encodedMood = encodeURIComponent(mood);
      let response = await fetch(
        `http://46.149.66.116:8080/api/advice?mood=${encodedMood}`
      );
      if (!response.ok) {
        console.error("HTTP error!", response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        console.error("Response is not JSON!");
        const text = await response.text();
        console.error("Response text:", text);
        throw new Error("Response is not JSON");
      }
      let book = await response.json();
      return book;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // Функция рендера списка советов
  function renderList(books) {
    const $list = $(".list_naw .action1");
    $list.empty(); // очищаем список
    if (books.length === 0) {
      $list.append("<li>Советы не найдены</li>");
      return;
    }
    books.forEach((book) => {
      $list.append(`
        <li>
          <a href="#" class="advice-link" data-title="${book.name}" data-content="${book.content} ">
            ${book.name}
          </a>
        </li>`);
    });
  }

  // Обработчик клика по ссылке — показываем модалку
  $(".list_naw").on("click", ".advice-link", function (e) {
    e.preventDefault();
    const title = $(this).data("title");
    const content = $(this).data("content");
    $("#modalTitle1").text(title);
    $("#modalContent1").text(content);
    $("#bookModal1").addClass("modal_active");
  });

  // Закрытие модалки
  $(".modal__close-button1").on("click", function () {
    $("#bookModal1").removeClass("modal_active");
  });
  $("#bookModal1").on("click", function (e) {
    if (e.target === this) {
      $("#bookModal1").removeClass("modal_active");
    }
  });

  // При изменении селекта загружаем и обновляем список
  $('select[name="mood_filter"]').on("change", async function () {
    const selectedMood = $(this).val();
    const books = await getBook(selectedMood);
    renderList(books);
  });

  // Инициализация — загрузим сразу список по выбранному по умолчанию значению селекта
  (async function init() {
    let initialMood = $('select[name="mood_filter"]').val() || "default";
    const books = await getBook(initialMood);
    renderList(books);
  })();
});
