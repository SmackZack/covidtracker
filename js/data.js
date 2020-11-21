var settings = {
  url: "https://api.covid19india.org/data.json",
  method: "GET",
  timeout: 0,
};

$.ajax(settings).done(function (response) {
 // console.log(response);
  var x = response.statewise;
  console.log(x.length);
  var text = "";
  for (var i = 1; i < x.length; i++) {
    text +=
      `<tr>
          <td>` +
      x[i].state +
      `</td>
          <td>` +
      x[i].confirmed +
      `</td>
          <td>` +
      x[i].active +
      `</td>
          <td>` +
      x[i].recovered +
      `</td>
          <td>` +
      x[i].deaths +
      `</td>
        </tr>`;
  }
  document.getElementById("covidData").innerHTML = text;
  $(document).ready(function () {
  $("#dtBasicExample").DataTable();
});
});


