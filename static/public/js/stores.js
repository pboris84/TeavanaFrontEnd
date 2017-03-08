var showAllStoresBtn = $('#btn-showAllStores');
console.log(showAllStoresBtn);
showAllStoresBtn.click(function (event) {
  console.log("button pressed")
  getStores();
});

function getStores() {
  $.getJSON("/Stores/all", function (data) {
    var table = $("#resultsTable");
    var tableHead = $('#tablehead');
    document.getElementById('resultsTable').innerHTML = "";
    document.getElementById('tablehead').innerHTML = "";
    tableHead.append(
        "<th>StoreID</th><th>Store Name</th>" +
        "<th>Store Description</th><th>Street Address</th>");
    $.each(data, function (ID, StoreObject) {
      var rowData = $('<tr></tr>');
      rowData.append("<td>" + StoreObject.StoreID + "</td>");
      rowData.append("<td>" + StoreObject.StoreName + "</td>");
      rowData.append("<td>" + StoreObject.StoreDescription + "</td>");
      rowData.append("<td>" + StoreObject.StreetAddress + "</td>");
      table.append(rowData);
    });
  });
}
