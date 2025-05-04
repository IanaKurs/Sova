// let display = document.querySelector(".display");
// let previous = document.querySelector(".left");
// let next = document.querySelector(".right");
// let days = document.querySelector(".days");
// let selected = document.querySelector(".selected");
// let dateToday = new Date();
// console.log(dateToday.getFullYear()); //2023
// console.log(dateToday.getMonth()); //11
// console.log(dateToday.getDate()); //12
// console.log(dateToday.getHours()); //13
// console.log(dateToday.getMinutes()); //9
// console.log(dateToday.getSeconds()); //35
// let year = dateToday.getFullYear();
// let month = dateToday.getMonth();
// let formattedDate = dateToday.toLocaleString("en-US", {
//   month: "long",
//   year: "numeric",
// });
// display.innerHTML = formattedDate;

// function displayCalendar() {
//   days.innerHTML = ""; // Очистка предыдущих дней
//   const firstDay = new Date(year, month, 1);
//   const firstDayIndex = firstDay.getDay();
//   const lastDay = new Date(year, month + 1, 0);
//   const numberOfDays = lastDay.getDate();

//   for (let x = 0; x < firstDayIndex; x++) {
//     let div = document.createElement("div");
//     days.appendChild(div);
//   }

//   for (let i = 1; i <= numberOfDays; i++) {
//     let div = document.createElement("div");
//     let currentDate = new Date(year, month, i);
//     div.dataset.date = currentDate.toDateString();
//     div.innerHTML = i;
//     days.appendChild(div);

//     if (
//       currentDate.getFullYear() === new Date().getFullYear() &&
//       currentDate.getMonth() === new Date().getMonth() &&
//       currentDate.getDate() === new Date().getDate()
//     ) {
//       div.classList.add("current-date");
//     }
//   }
// }

// function displaySelected() {
//   const dayElements = document.querySelectorAll(".days div");
//   dayElements.forEach((day) => {
//     day.addEventListener("click", (e) => {
//       const selectedDate = e.target.dataset.date;
//       selected.innerHTML = Selected`Date: ${selectedDate}`;
//     });
//   });
// }

// // Инициализация календаря
// displayCalendar();
// displaySelected();

// previous.addEventListener("click", () => {
//   month--;
//   if (month < 0) {
//     month = 11;
//     year--;
//   }
//   displayCalendar();
//   displaySelected();
// });

// next.addEventListener("click", () => {
//   month++;
//   if (month > 11) {
//     month = 0;
//     year++;
//   }
//   displayCalendar();
//   displaySelected();
// });
let display = document.querySelector(".display");
let days = document.querySelector(".days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let selected = document.querySelector(".selected");

let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();

function displayCalendar() {
  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  const firstDayIndex = firstDay.getDay(); //4

  const numberOfDays = lastDay.getDate(); //31

  let formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  display.innerHTML = `${formattedDate}`;

  for (let x = 1; x <= firstDayIndex; x++) {
    const div = document.createElement("div");
    div.innerHTML += "";

    days.appendChild(div);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    let div = document.createElement("div");
    let currentDate = new Date(year, month, i);

    div.dataset.date = currentDate.toDateString();

    div.innerHTML += i;
    days.appendChild(div);
    if (
      currentDate.getFullYear() === new Date().getFullYear() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }
  }
}

// Call the function to display the calendar
displayCalendar();

previous.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  if (month < 0) {
    month = 11;
    year = year - 1;
  }

  month = month - 1;

  date.setMonth(month);

  displayCalendar();
  displaySelected();
});

next.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  if (month > 11) {
    month = 0;
    year = year + 1;
  }

  month = month + 1;
  date.setMonth(month);

  displayCalendar();
  displaySelected();
});

function displaySelected() {
  const dayElements = document.querySelectorAll(".days div");
  dayElements.forEach((day) => {
    day.addEventListener("click", (e) => {
      const selectedDate = e.target.dataset.date;
      selected.innerHTML = `Selected Date : ${selectedDate}`;
    });
  });
}
displaySelected();
