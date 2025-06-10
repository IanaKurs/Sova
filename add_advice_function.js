$(document).ready(function () {
  $(".button_naw").click(function () {
    console.log("Button clicked!");

    let name = $("#name_list").val();
    let content = $("#comment").val();
    let mood = $('input[name="mood_advice"]:checked').val();
    // let mood = "norm"; //ЗАМЕНИТЬ!!!!!!!
    console.log("Name:", name);
    console.log("Content:", content);
    console.log("Mood:", mood);

    if (name || content) {
      createNewAdvice(name, content, mood);
    } else {
      console.log("Empty fields");
    }
  });
});

async function createNewAdvice(curname, curcontent, curmood) {
  console.log("Creating new record...");
  try {
    const data = {
      name: curname,
      content: curcontent,
      mood: curmood,
    };
    const body = JSON.stringify(data);
    console.log(body);
    let response = await fetch(
      "http://46.149.66.116:8080/api/advice/createAdvice",
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
  } catch (error) {
    console.error("Error creating record:", error);
    // Handle the error appropriately (e.g., display an error message to the user)
  }
}
