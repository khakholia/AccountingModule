 
function getData(type) {
  var req;
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      //display
      if (document.getElementById("table-data"))
        document.getElementById("table-data").classList.remove("d-none");
    }
  };
  req.open("GET", "" + type + ".xml", false);
  req.send();
  return req.responseXML;
}
// global data
var data = null;

// if data is not available or action = refresh then "getData"
// It is called from html button where type and action is passed
function refreshData(type, action) {
  document.getElementById("table-data").innerHTML = "<p>Loading...</p>";

  // check data available
  if (data == null) {
    data = getData(type);
  }

  //delete if mode =delete
  if (action == "delete") {
    y = data.getElementsByTagName("Transaction")[0];
    data.documentElement.removeChild(y);
  }
  if (action == "edit") {
    i = parseInt(prompt("Enter index to change")) - 1;
    a = prompt("Enter Date");
    b = prompt("Enter Type");
    c = prompt("Enter Particulars");
    d = prompt("Enter Amount");
    e = prompt("Enter Description");
    f = prompt("Enter Status");
    data
      .getElementsByTagName("Transaction")
      [i].getElementsByTagName("date")[0].firstChild.nodeValue = a;
    data
      .getElementsByTagName("Transaction")
      [i].getElementsByTagName("type")[0].firstChild.nodeValue = b;
    data
      .getElementsByTagName("Transaction")
      [i].getElementsByTagName("particulars")[0].firstChild.nodeValue = c;
    data
      .getElementsByTagName("Transaction")
      [i].getElementsByTagName("amount")[0].firstChild.nodeValue = d;
    data
      .getElementsByTagName("Transaction")
      [i].getElementsByTagName("description")[0].firstChild.nodeValue = e;
    data
      .getElementsByTagName("Transaction")
      [i].getElementsByTagName("status")[0].firstChild.nodeValue = f;
  }
  if (action == "add") {
    a = prompt("Enter Date");
    b = prompt("Enter Type");
    c = prompt("Enter Particulars");
    d = prompt("Enter Amount");
    e = prompt("Enter Description");
    f = prompt("Enter Status");

    var details = [];

    Transaction = data.createElement("Transaction");
    details[0] = data.createElement("date");
    details[0].appendChild(data.createTextNode(a));
    Transaction.appendChild(details[0]);
    details[1] = data.createElement("type");
    details[1].appendChild(data.createTextNode(b));
    Transaction.appendChild(details[1]);
    details[2] = data.createElement("particulars");
    details[2].appendChild(data.createTextNode(c));
    Transaction.appendChild(details[2]);
    details[3] = data.createElement("amount");
    details[3].appendChild(data.createTextNode(d));
    Transaction.appendChild(details[3]);
    details[4] = data.createElement("description");
    details[4].appendChild(data.createTextNode(e));
    Transaction.appendChild(details[4]);
    details[5] = data.createElement("status");
    details[5].appendChild(data.createTextNode(f));
    Transaction.appendChild(details[5]);

    data.documentElement.appendChild(Transaction);

    // alert(y=data.getElementsByTagName(type).length)
    // y = data.getElementsByTagName("Transaction")[0];
    // data.documentElement.appendChild(y);
    // alert(y=data.getElementsByTagName(type).length)
  }
  if (action == "refresh") {
    data = getData(type);
  }
  // send the data to display in html
  displayData(data, type);
}
function displayData(data, type) {
  document.getElementById("welcome").classList.add("d-none");

  var tableData = "";
  if (type === "transaction") {
    tableData +=
      '<div id="table-controls" class="row m-2 justify-content-end">' +
      '<div class="btn p-2" onclick="refreshData(\'transaction\',\'add\')"">' +
      '<img class="h-50" src="https://img.icons8.com/android/24/000000/plus.png"/>' +
      "</div>" +
      '<div class="btn p-2">' +
      '<img class="h-50" onclick="refreshData(\'transaction\',\'edit\')" src="https://img.icons8.com/ios-glyphs/30/000000/pencil--v1.png"/>' +
      "</div>" +
      '<div class="btn p-2">' +
      '<img class="h-50" onclick="refreshData(\'transaction\',\'delete\')" src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"/>' +
      "</div>" +
      '<div class="btn p-2">' +
      '<img class="h-50" onclick="refreshData(\'transaction\',\'refresh\')" src="https://img.icons8.com/ios-filled/50/000000/refresh--v2.png"/>' +
      "</div>" +
      "<table class='table'>" +
      "<thead> <tr>" +
      '<th scope="col">Date</th>' +
      '<th scope="col">Type</th>' +
      '<th scope="col">Particulars</th>' +
      '<th scope="col">Amount</th>' +
      '<th scope="col">Description</th>' +
      '<th scope="col">Status</th>' +
      "</tr> </thead> <tbody><tr>";
    var loop = data.getElementsByTagName("Transaction").length;

    for (i = 0; i < loop; i++) {
      tableData +=
        "<tr>" +
        "<td scope='col'>" +
        data
          .getElementsByTagName("Transaction")
          [i].getElementsByTagName("date")[0].firstChild.nodeValue +
        "</td>" +
        "<td scope='col'>" +
        data
          .getElementsByTagName("Transaction")
          [i].getElementsByTagName("type")[0].firstChild.nodeValue +
        "</td>" +
        "<td scope='col'>" +
        data
          .getElementsByTagName("Transaction")
          [i].getElementsByTagName("particulars")[0].firstChild
          .nodeValue +
        "</td>" +
        "<td scope='col'>" +
        data
          .getElementsByTagName("Transaction")
          [i].getElementsByTagName("amount")[0].firstChild.nodeValue +
        "</td>" +
        "<td scope='col'>" +
        data
          .getElementsByTagName("Transaction")
          [i].getElementsByTagName("description")[0].firstChild
          .nodeValue +
        "</td>" +
        "<td scope='col'>" +
        data
          .getElementsByTagName("Transaction")
          [i].getElementsByTagName("status")[0].firstChild.nodeValue +
        "</td>" +
        "" +
        "</tr>";
    }

    tableData += "</tr></tbody></table>";
  }
  document.getElementById("table-data").innerHTML = tableData;
}
