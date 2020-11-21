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

$(document).ready(function () {
  $("#tableSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#covidData tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#dtMaterialDesignExample").DataTable({
    paging: false,
    order: [[1, "desc"]],
    info: false,
    searching: false,
  });
  $("#dtMaterialDesignExample_wrapper")
    .find("label")
    .each(function () {
      $(this).parent().append($(this).children());
    });
  $("#dtMaterialDesignExample_wrapper .dataTables_filter")
    .find("input")
    .each(function () {
      const $this = $(this);
      $this.attr("placeholder", "Search");
      $this.removeClass("form-control-sm");
    });
  $("#dtMaterialDesignExample_wrapper .dataTables_length").addClass(
    "d-flex flex-row"
  );
  $("#dtMaterialDesignExample_wrapper .dataTables_filter").addClass("md-form");
  $("#dtMaterialDesignExample_wrapper select").removeClass(
    "custom-select custom-select-sm form-control form-control-sm"
  );
  $("#dtMaterialDesignExample_wrapper select").addClass("mdb-select");
  $("#dtMaterialDesignExample_wrapper .mdb-select").materialSelect();
  $("#dtMaterialDesignExample_wrapper .dataTables_filter")
    .find("label")
    .remove();
});

