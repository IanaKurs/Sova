$(document).ready(function () {
  $(".button_1").click(function () {
    console.log("Button clicked!");

    let mood = $('input[name="mood"]:checked').val();
    let extraMood = $('input[name="extraMood"]:checked').val();
    let reason = $("#emotions").val(); // Corrected selector - assuming #emotions is the ID

    console.log("Mood:", mood);
    console.log("Extra Mood:", extraMood);
    console.log("Reason:", reason);

    if (!mood || !extraMood || !reason) {
      console.log("Please fill out all the fields!");
    } else {
      createNewRecord(mood, extraMood, reason);
    }
  });
});
async function createNewRecord(curmood, curextraMood, curreason) {
  console.log("Creating new record...");
  try {
    const data = {
      mood: curmood,
      extraMood: curextraMood,
      reason: curreason,
    };
    const body = JSON.stringify(data);
    console.log(body);
    let response = await fetch(
      "http://46.149.66.116:8080/api/records/newRecord",
      {
        method: "POST",
        body: body,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    if (!response.ok) {
      console.error("HTTP error!", response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let product = await response.json();
    console.log("Record created successfully:", product);
    return product;
  } catch (error) {
    console.error("Error creating record:", error);
    // Handle the error appropriately (e.g., display an error message to the user)
  }
}

// $(document).ready(function () {
//   $(".button_1").click(function () {
//     let mood = $('input[name="mood"]:checked').val();
//     let extraMood = $('input[name="extraMood"]:checked').val();
//     let reason = $("#emotions").val();

//     if (!mood || !extraMood || !reason) {
//       showModal("Ошибка", "Пожалуйста, заполните все поля!");
//     } else {
//       createNewRecord(mood, extraMood, reason);
//     }
//   });

//   $(".modal__close-button").click(function () {
//     $("#bookModal").hide();
//   });
// });

// async function createNewRecord(curmood, curextraMood, curreason) {
//   try {
//     const data = {
//       mood: curmood,
//       extraMood: curextraMood,
//       reason: curreason,
//     };

//     const response = await fetch(
//       "http://46.149.66.116:8080/api/records/newRecord",
//       {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Ошибка HTTP: ${response.status}`);
//     }

//     const newRecord = await response.json();
//     console.log("Создана запись:", newRecord);

//     // Выполняем второй запрос — получаем рекомендации по id
//     getRecommendationById(newRecord.id);
//   } catch (error) {
//     console.error("Ошибка при создании записи:", error);
//     showModal("Ошибка", "Не удалось создать запись. Попробуйте позже.");
//   }
// }

// async function getRecommendationById(id) {
//   try {
//     const response = await fetch(`http://46.149.66.116:8080/api/records/${id}`);

//     if (!response.ok) {
//       throw new Error(`Ошибка HTTP: ${response.status}`);
//     }

//     const recommendation = await response.json();
//     console.log("Рекомендация:", recommendation);

//     const modalTitle = recommendation.name || "Рекомендация";
//     const modalContent = `
//       <p><strong>Настроение:</strong> ${recommendation.mood}</p>
//       <p><strong>Совет:</strong><br>${recommendation.content}</p>
//     `;

//     showModal(modalTitle, modalContent);
//   } catch (error) {
//     console.error("Ошибка при получении рекомендации:", error);
//     showModal("Ошибка", "Не удалось получить рекомендацию. Попробуйте позже.");
//   }
// }

// function showModal(title, content) {
//   $("#modalTitle").html(title);
//   $("#modalContent").html(content);
//   $("#bookModal").show();
// }
