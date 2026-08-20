
/*
$(document).ready(function () {
    var dropdown1Visible = false;
    var dropdown2Visible = false;

    // Hide the dropdowns by default
    $("#dropdown-content1").hide();
    $("#dropdown-content2").hide();

    $("#dropdown1").click(function (e) {
        if (dropdown2Visible) {
            $("#dropdown-content2").hide();
            dropdown2Visible = false;
        }
        $("#dropdown-content1").toggle();
        dropdown1Visible = !dropdown1Visible;
        e.stopPropagation();
    });

    $("#dropdown2").click(function (e) {
        if (dropdown1Visible) {
            $("#dropdown-content1").hide();
            dropdown1Visible = false;
        }
        $("#dropdown-content2").toggle();
        dropdown2Visible = !dropdown2Visible;
        e.stopPropagation();
    });

    // Close the dropdowns when clicking outside of them
    $(document).click(function () {
        $("#dropdown-content1").hide();
        $("#dropdown-content2").hide();
        dropdown1Visible = false;
        dropdown2Visible = false;
    });

    // Prevent the dropdown from closing when clicking inside it
    $(".dropdown-menu1").click(function (e) {
        e.stopPropagation();
    });

    $(".dropdown-menu2").click(function (e) {
        e.stopPropagation();
    });
});
*/


$(document).ready(function () {
    var dropdown1Visible = false;
    var dropdown2Visible = false;

    // Hide the dropdowns by default
    $("#dropdown-content1").hide();
    $("#dropdown-content2").hide();

    $("#dropdown1").click(function (e) {
      if (dropdown2Visible) {
        $("#dropdown-content2").hide();
        dropdown2Visible = false;
      }
      $("#dropdown-content1").toggle();
      dropdown1Visible = !dropdown1Visible;
      e.stopPropagation();
    });

    $("#dropdown2").click(function (e) {
      if (dropdown1Visible) {
        $("#dropdown-content1").hide();
        dropdown1Visible = false;
      }
      $("#dropdown-content2").toggle();
      dropdown2Visible = !dropdown2Visible;
      e.stopPropagation();
    });

    // Close the dropdowns when clicking outside of them
    $(document).click(function () {
      $("#dropdown-content1").hide();
      $("#dropdown-content2").hide();
      dropdown1Visible = false;
      dropdown2Visible = false;
    });

    // Prevent the dropdown from closing when clicking inside it
    $(".dropdown-menu1").click(function (e) {
      e.stopPropagation();
    });

    $(".dropdown-menu2").click(function (e) {
      e.stopPropagation();
    });
  });