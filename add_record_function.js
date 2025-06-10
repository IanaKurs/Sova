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
