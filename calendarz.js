// let display = document.querySelector(".display");
// let days = document.querySelector(".days");
// let previous = document.querySelector(".left");
// let next = document.querySelector(".right");
// let selected = document.querySelector(".selected");

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();

// let records = []; // записи с сервера

// async function getCalendarData(month, year) {
//   try {
//     let response = await fetch(
//       `http://46.149.66.116:8080/api/records/calendar?month=${month}&year=${year}`
//     );
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//     let data = await response.json();

//     // Приводим дату к формату YYYY-MM-DD
//     return data.map((record) => ({
//       ...record,
//       date: record.createAt.split("T")[0],
//     }));
//   } catch (e) {
//     console.error(e);
//     return [];
//   }
// }

// async function displayCalendar() {
//   days.innerHTML = "";

//   records = await getCalendarData(month + 1, year); // API ожидает 1-12

//   const firstDay = new Date(year, month, 1);
//   const lastDay = new Date(year, month + 1, 0);

//   const firstDayIndex = firstDay.getDay();
//   const numberOfDays = lastDay.getDate();

//   let formattedDate = date.toLocaleString("en-US", {
//     month: "long",
//     year: "numeric",
//   });

//   display.innerHTML = `${formattedDate}`;

//   for (let x = 1; x <= firstDayIndex; x++) {
//     const div = document.createElement("div");
//     days.appendChild(div);
//   }

//   for (let i = 1; i <= numberOfDays; i++) {
//     let div = document.createElement("div");
//     let currentDate = new Date(year, month, i);
//     let isoDate = `${currentDate.getFullYear()}-${String(
//       currentDate.getMonth() + 1
//     ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

//     div.dataset.date = currentDate.toDateString();
//     div.dataset.iso = isoDate;
//     div.innerHTML = i;

//     if (records.some((record) => record.date === isoDate)) {
//       div.classList.add("has-record");
//     }

//     if (
//       currentDate.getFullYear() === new Date().getFullYear() &&
//       currentDate.getMonth() === new Date().getMonth() &&
//       currentDate.getDate() === new Date().getDate()
//     ) {
//       div.classList.add("current-date");
//     }

//     days.appendChild(div);
//   }

//   displaySelected();
// }

// function displaySelected() {
//   const dayElements = document.querySelectorAll(".days div");
//   dayElements.forEach((day) => {
//     day.addEventListener("click", (e) => {
//       const selectedDate = e.target.dataset.date;
//       const isoDate = e.target.dataset.iso;

//       selected.innerHTML = `Selected Date : ${selectedDate}`;

//       const dayRecords = records.filter((record) => record.date === isoDate);
//       if (dayRecords.length > 0) {
//         showModal(dayRecords, selectedDate);
//       }
//     });
//   });
// }

// function showModal(dayRecords, selectedDate) {
//   const modal = document.getElementById("bookModal");
//   const modalTitle = document.getElementById("modalTitle");
//   const modalContent = document.getElementById("modalContent");
//   const closeButton = document.querySelector(".modal__close-button");

//   modalTitle.textContent = `Записи на ${selectedDate}`;
//   modalContent.innerHTML = dayRecords
//     .map(
//       (record) => `
//         <div class="record-entry">
//           <p><strong>Настроение:</strong> ${record.mood}</p>
//           <p><strong>Доп. настроение:</strong> ${record.extraMood}</p>
//           <p><strong>Причина:</strong> ${record.reason}</p>
//           <p><strong>Время:</strong> ${new Date(
//             record.createAt
//           ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
//           <hr />
//         </div>
//       `
//     )
//     .join("");

//   modal.classList.add("modal_active");

//   closeButton.onclick = () => {
//     modal.classList.remove("modal_active");
//   };

//   window.onclick = (event) => {
//     if (event.target === modal) {
//       modal.classList.remove("modal_active");
//     }
//   };
// }

// // Навигация по месяцам
// previous.addEventListener("click", () => {
//   selected.innerHTML = "";
//   month--;
//   if (month < 0) {
//     month = 11;
//     year--;
//   }
//   date.setMonth(month);
//   displayCalendar();
// });

// next.addEventListener("click", () => {
//   selected.innerHTML = "";
//   month++;
//   if (month > 11) {
//     month = 0;
//     year++;
//   }
//   date.setMonth(month);
//   displayCalendar();
// });

// // Инициализация
// displayCalendar();

// let display = document.querySelector(".display");
// let days = document.querySelector(".days");
// let previous = document.querySelector(".left");
// let next = document.querySelector(".right");
// let selected = document.querySelector(".selected");

// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();

// let records = []; // записи с сервера

// // Получение записей с сервера
// async function getCalendarData(month, year) {
//   try {
//     let response = await fetch(
//       `http://46.149.66.116:8080/api/records/calendar?month=${month}&year=${year}`
//     );
//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//     let data = await response.json();

//     // Форматирование даты
//     return data.map((record) => ({
//       ...record,
//       date: record.createAt.split("T")[0],
//     }));
//   } catch (e) {
//     console.error("Ошибка загрузки данных календаря:", e);
//     return [];
//   }
// }

// // Отображение календаря
// async function displayCalendar() {
//   days.innerHTML = "";

//   records = await getCalendarData(month + 1, year); // API ожидает 1-12

//   const firstDay = new Date(year, month, 1);
//   const lastDay = new Date(year, month + 1, 0);

//   const firstDayIndex = firstDay.getDay();
//   const numberOfDays = lastDay.getDate();

//   let formattedDate = date.toLocaleString("ru-RU", {
//     month: "long",
//     year: "numeric",
//   });

//   display.innerHTML =
//     formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

//   for (let x = 0; x < firstDayIndex; x++) {
//     const div = document.createElement("div");
//     days.appendChild(div);
//   }

//   for (let i = 1; i <= numberOfDays; i++) {
//     let div = document.createElement("div");
//     let currentDate = new Date(year, month, i);
//     let isoDate = `${currentDate.getFullYear()}-${String(
//       currentDate.getMonth() + 1
//     ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

//     div.dataset.date = currentDate.toDateString();
//     div.dataset.iso = isoDate;
//     div.textContent = i;

//     if (records.some((record) => record.date === isoDate)) {
//       div.classList.add("has-record");
//     }

//     if (currentDate.toDateString() === new Date().toDateString()) {
//       div.classList.add("current-date");
//     }

//     days.appendChild(div);
//   }

//   displaySelected();
// }

// // Обработка клика по дню
// function displaySelected() {
//   const dayElements = document.querySelectorAll(".days div");
//   dayElements.forEach((day) => {
//     day.addEventListener("click", (e) => {
//       const selectedDate = e.target.dataset.date;
//       const isoDate = e.target.dataset.iso;

//       if (!isoDate) return;

//       selected.innerHTML = `Выбранная дата: ${selectedDate}`;

//       const dayRecords = records.filter((record) => record.date === isoDate);

//       if (Array.isArray(dayRecords) && dayRecords.length > 0) {
//         showModal(dayRecords, selectedDate);
//       } else {
//         showModal([], selectedDate);
//       }
//     });
//   });
// }

// // Модальное окно с записями
// function showModal(dayRecords, selectedDate) {
//   const modal = document.getElementById("bookModal");
//   const modalTitle = document.getElementById("modalTitle");
//   const modalContent = document.getElementById("modalContent");
//   const closeButton = document.querySelector(".modal__close-button");

//   modalTitle.textContent = `Записи на ${selectedDate}`;

//   if (!Array.isArray(dayRecords) || dayRecords.length === 0) {
//     modalContent.innerHTML = `<p>Записей на выбранную дату нет.</p>`;
//   } else {
//     modalContent.innerHTML = dayRecords
//       .map(
//         (record) => `
//         <div class="record-entry">
//           <p><strong>Настроение:</strong> ${record.mood}</p>
//           <p><strong>Доп. настроение:</strong> ${record.extraMood || "-"}</p>
//           <p><strong>Причина:</strong> ${record.reason || "-"}</p>
//           <p><strong>Время:</strong> ${new Date(
//             record.createAt
//           ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
//           <hr />
//         </div>
//       `
//       )
//       .join("");
//   }

//   modal.classList.add("modal_active");

//   closeButton.onclick = () => {
//     modal.classList.remove("modal_active");
//   };

//   window.onclick = (event) => {
//     if (event.target === modal) {
//       modal.classList.remove("modal_active");
//     }
//   };
// }

// // Навигация по месяцам
// previous.addEventListener("click", () => {
//   selected.innerHTML = "";
//   month--;
//   if (month < 0) {
//     month = 11;
//     year--;
//   }
//   date = new Date(year, month, 1);
//   displayCalendar();
// });

// next.addEventListener("click", () => {
//   selected.innerHTML = "";
//   month++;
//   if (month > 11) {
//     month = 0;
//     year++;
//   }
//   date = new Date(year, month, 1);
//   displayCalendar();
// });

// // Инициализация
// displayCalendar();
let display = document.querySelector(".display");
let days = document.querySelector(".days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let selected = document.querySelector(".selected");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let records = [];

async function getCalendarData(month, year) {
  try {
    let response = await fetch(
      `http://46.149.66.116:8080/api/records/calendar?month=${month}&year=${year}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    let data = await response.json();

    return data.map((record) => ({
      ...record,
      date: record.createAt.split("T")[0],
    }));
  } catch (e) {
    console.error("Ошибка загрузки данных календаря:", e);
    return [];
  }
}

async function displayCalendar() {
  days.innerHTML = "";

  records = await getCalendarData(month + 1, year); // 1–12 для API

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayIndex = firstDay.getDay();
  const numberOfDays = lastDay.getDate();

  let formattedDate = date.toLocaleString("ru-RU", {
    month: "long",
    year: "numeric",
  });

  display.innerHTML =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  for (let x = 0; x < firstDayIndex; x++) {
    days.appendChild(document.createElement("div"));
  }

  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);
    let isoDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

    div.dataset.date = currentDate.toDateString();
    div.dataset.iso = isoDate;
    div.textContent = i;

    if (records.some((r) => r.date === isoDate)) {
      div.classList.add("has-record");
    }

    if (currentDate.toDateString() === new Date().toDateString()) {
      div.classList.add("current-date");
    }

    days.appendChild(div);
  }

  displaySelected();
}

function displaySelected() {
  const dayElements = document.querySelectorAll(".days div");
  dayElements.forEach((day) => {
    day.addEventListener("click", (e) => {
      const selectedDate = e.target.dataset.date;
      const isoDate = e.target.dataset.iso;

      if (!isoDate) return;

      selected.innerHTML = `Выбранная дата: ${selectedDate}`;

      const dayRecords = records.filter((record) => record.date === isoDate);
      showCalendarModal(dayRecords, selectedDate);
    });
  });
}

// Отдельная модалка для календаря
function showCalendarModal(dayRecords, selectedDate) {
  const modal = document.getElementById("calendarModal");
  const modalTitle = document.getElementById("calendarModalTitle");
  const modalContent = document.getElementById("calendarModalContent");

  modalTitle.textContent = `Записи на ${selectedDate}`;

  if (!Array.isArray(dayRecords) || dayRecords.length === 0) {
    modalContent.innerHTML = `<p>Записей на выбранную дату нет.</p>`;
  } else {
    modalContent.innerHTML = dayRecords
      .map(
        (record) => `
      <div class="record-entry">
        <p><strong>Настроение:</strong> ${record.mood}</p>
        <p><strong>Доп. настроение:</strong> ${record.extraMood || "-"}</p>
        <p><strong>Причина:</strong> ${record.reason || "-"}</p>
        <p><strong>Время:</strong> ${new Date(
          record.createAt
        ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
        <hr />
      </div>
    `
      )
      .join("");
  }

  modal.classList.add("modal_active");

  document.querySelector(".modal__close-button").onclick = () => {
    modal.classList.remove("modal_active");
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.classList.remove("modal_active");
    }
  };
}

previous.addEventListener("click", () => {
  selected.innerHTML = "";
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  date = new Date(year, month, 1);
  displayCalendar();
});

next.addEventListener("click", () => {
  selected.innerHTML = "";
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  date = new Date(year, month, 1);
  displayCalendar();
});

displayCalendar();
