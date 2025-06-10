async function createNewRecord(useremail, password) {
  let response = await fetch("http://46.149.66.116:8080/api/auth/login", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: useremail,
      password: password,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  let product = await response.json();
  console.log(product);
  // Здесь можно добавить логику для обработки успешного входа
}

$("#exit").click(function () {
  let useremail = $("#useremail").val();
  let password = $("#password").val();

  createNewRecord(useremail, password).catch((error) => {
    console.error("Error:", error);
  });
});

$("#exit").click(function () {
  $("form[name=myForm]").trigger("reset");
});
