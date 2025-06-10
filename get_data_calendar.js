$(document).ready(function () {
  async function getCalendar(month, year) {
    console.log(month, year);
    let encodedMonth = encodeURIComponent(month);
    console.log(encodedMonth);
    let encodedYear = encodeURIComponent(year);
    console.log(encodedYear);
    let response = await fetch(
      `http://46.149.66.116:8080/api/records/calendar?month=${encodedMonth}&year=${encodedYear}`
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
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Response is not JSON!");
      const text = await response.text();
      console.error("Response text:", text); // Log the response text
      throw new Error("Response is not JSON");
    }
    let dataCalendar = await response.json();
    console.log(dataCalendar);
    return dataCalendar;
  }

  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  getCalendar(month + 1, year);
});
