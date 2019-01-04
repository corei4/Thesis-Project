import $ from "jquery";

var AddCh = function(data) {
  $.ajax({
    url: "/charities",
    type: "POST",
    data: JSON.stringify({ data }),
    contentType: "application/json",
    success: function(data) {
      console.log("Add", data);
    },
    error: function(error) {
      console.error("errorrrrrr", error);
    }
  });
};