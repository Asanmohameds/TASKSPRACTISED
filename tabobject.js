var rIndex, tableData_body = document.getElementById("tableData_body");

// Once page load its shows the data in table...
function getTableList() {

    var tableString = localStorage.getItem("myObj_String");
    if (tableString) {
        var deserializedData = JSON.parse(tableString);
        var tableData = document.getElementById("tableData_body");
        document.getElementById("tableData_body").innerHTML = "";
        //tableData.innerHTML("");
        for (var i = 0; i < deserializedData.length; i++) {

            tableData.innerHTML += "<tr>" +
                "<td>" + deserializedData[i].studentname + "</td>" +
                "<td>" + deserializedData[i].fathername + "</td>" +
                "<td>" + deserializedData[i].email + "</td>" +
                "<td><a onClick='selectedRowDisplay()' data-toggle='modal' data-target='#exampleModal'  >Edit</a>" +
                "<a onClick='deleteSelectedRow(this)'>Delete</a></td>" +
                "</tr>";
        }
    }
}
// calling the function to show.
getTableList();

function submitData() {
    debugger;
    var myObj = readForm();
    var _tableList = localStorage.getItem("myObj_String");
    var tableList = [];
    if (_tableList) {
        tableList = JSON.parse(_tableList);
    }
    tableList.push(myObj);
    var serializedData = JSON.stringify(tableList);
    localStorage.setItem("myObj_String", serializedData);
    getTableList();
}

function readForm() {
    var formData = {};
    formData["studentname"] = document.getElementById("studentname").value;
    formData["fathername"] = document.getElementById("fathername").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}



function selectedRowDisplay() {
    for (var i = 0; i < tableData_body.rows.length; i++) {
        tableData_body.rows[i].onclick = function () {
            rIndex = this.rowIndex;

            document.getElementById("studentname").value = this.cells[0].innerHTML;
            document.getElementById("fathername").value = this.cells[1].innerHTML;
            document.getElementById("email").value = this.cells[2].innerHTML;

        }
    }
}

selectedRowDisplay();

// once clicked the open button...form should be in empty...
function openCreateForm() {
    document.getElementById("studentname").value = null;
    document.getElementById("fathername").value = null;
    document.getElementById("email").value = null;
}


function update() {
    debugger;
    var _tableList = localStorage.getItem("myObj_String");
    var tableList = [];
    if (_tableList) {
        tableList = JSON.parse(_tableList);
    }

    var myObj = readForm();
    for (var i = 0; i < tableList.length; i++) {

        if (i == rIndex) {
            tableList[i] = myObj;
        }
    }

    var serializedData = JSON.stringify(tableList);
    localStorage.setItem("myObj_String", serializedData);

    getTableList();

}

function deleteSelectedRow(eve) {
    debugger

    var _tableList = localStorage.getItem("myObj_String");
    var tableList = [];
    if (_tableList) {
        tableList = JSON.parse(_tableList);
    }

    var trArray = $(eve).parent().parent();

    rIndex =  trArray[0].rowIndex;

    rIndex = rIndex - 1;
    // delete the particular index item from array...       
    tableList.splice(rIndex,1);

    var serializedData = JSON.stringify(tableList);
    localStorage.setItem("myObj_String", serializedData);

    getTableList();

}
