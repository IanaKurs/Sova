// $(document).ready(function () {
//   async function getStatistic() {
//     let response = await fetch(
//       `http://46.149.66.116:8080/api/records/statistic`
//     );
//     if (!response.ok) {
//       console.error("HTTP error!", response.status);
//       try {
//         const errorBody = await response.json();
//         console.error("Error body:", errorBody);
//       } catch (jsonError) {
//         console.error("Could not parse error body as JSON:", jsonError);
//       }
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     let dataStat = await response.text();
//     let point = dataStat.slice(dataStat.indexOf(":") + 1);
//     console.log(point);
//     displayImageBasedOnPoint(point);
//     return point;
//   }
//   function displayImageBasedOnPoint(point) {
//     point = parseFloat(point); // 👈 приводим к числу
//     let imageUrl;
//     let emotions;
//     if (point < -18.0) {
//       imageUrl = "src/photo_2025-06-08_21-35-46.jpg";
//       emotions = "worst";
//     } else if (point >= -18.0 && point < -6.0) {
//       imageUrl = "src/photo_2025-06-08_21-35-59.jpg";
//       emotions = "bad";
//     } else if (point >= -6.0 && point < 6.0) {
//       imageUrl = "src/photo_2025-06-08_21-36-04.jpg";
//       emotions = "norm";
//     } else if (point >= 6.0 && point < 18.0) {
//       imageUrl = "src/photo_2025-06-08_21-36-14.jpg";
//       emotions = "good";
//     } else if (point >= 18.0) {
//       imageUrl = "src/photo_2025-06-08_21-36-22.jpg";
//       emotions = "excellent";
//     }
//     $(".mood-scale-label").empty();
//     const emotElement = `Среднее за 30 дней: ${emotions}`;
//     $(".mood-scale-label").append(emotElement);

//     $("#imageContainer").empty();
//     const imgElement = $("<img>")
//       .attr("src", imageUrl)
//       .attr("alt", "Statistic Image")
//       .css({
//         width: "190px",
//         height: "130px",
//       });
//     $("#imageContainer").append(imgElement);
//   }
//   const targetNode = document.querySelector(".container");

//   if (targetNode) {
//     let alreadyVisible = false;

//     const observer = new MutationObserver(() => {
//       const display = $(targetNode).css("display");

//       if (display === "block" && !alreadyVisible) {
//         alreadyVisible = true;
//         getStatistic(); // Появился
//       } else if (display === "none" && alreadyVisible) {
//         alreadyVisible = false;
//         $("#imageContainer").empty(); // Очистка при скрытии
//       }
//     });

//     observer.observe(targetNode, {
//       attributes: true,
//       attributeFilter: ["style"], // следим только за style
//     });
//   }
// });

$(document).ready(function () {
  async function getStatistic() {
    let response = await fetch(
      `http://46.149.66.116:8080/api/records/statistic`
    );
    if (!response.ok) {
      console.error("HTTP error!", response.status);
      try {
        const errorBody = await response.json();
        console.error("Error body:", errorBody);
      } catch (jsonError) {
        console.error("Could not parse error body as JSON:", jsonError);
      }
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    let dataStat = await response.text();
    let point = dataStat.slice(dataStat.indexOf(":") + 1);
    console.log(point);
    displayImageBasedOnPoint(point);
    return point;
  }

  function displayImageBasedOnPoint(point) {
    point = parseFloat(point);
    let imageUrl;
    let emotions;

    if (point < -18.0) {
      imageUrl = "src/photo_2025-06-08_21-35-46.jpg";
      emotions = "worst";
    } else if (point >= -18.0 && point < -6.0) {
      imageUrl = "src/photo_2025-06-08_21-35-59.jpg";
      emotions = "bad";
    } else if (point >= -6.0 && point < 6.0) {
      imageUrl = "src/photo_2025-06-08_21-36-04.jpg";
      emotions = "norm";
    } else if (point >= 6.0 && point < 18.0) {
      imageUrl = "src/photo_2025-06-08_21-36-14.jpg";
      emotions = "good";
    } else if (point >= 18.0) {
      imageUrl = "src/photo_2025-06-08_21-36-22.jpg";
      emotions = "excellent";
    }

    $(".mood-scale-label").empty();
    const emotElement = `Среднее за 30 дней: ${emotions}`;
    $(".mood-scale-label").append(emotElement);

    $("#imageContainer").empty();
    const imgElement = $("<img>")
      .attr("src", imageUrl)
      .attr("alt", "Statistic Image")
      .css({
        width: "190px",
        height: "130px",
      });
    $("#imageContainer").append(imgElement);
  }

  const targetNode = document.querySelector(".container");
  const moodScaleNode = document.querySelector(".mood-scale-container");

  if (targetNode) {
    let alreadyVisible = false;

    const observer = new MutationObserver(() => {
      const display = $(targetNode).css("display");

      if (display === "block" && !alreadyVisible) {
        alreadyVisible = true;
        getStatistic();

        if (moodScaleNode) {
          $(moodScaleNode).css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          });
        }
      } else if (display === "none" && alreadyVisible) {
        alreadyVisible = false;
        $("#imageContainer").empty();

        if (moodScaleNode) {
          $(moodScaleNode).css("display", "none");
        }
      }
    });

    observer.observe(targetNode, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }
});
