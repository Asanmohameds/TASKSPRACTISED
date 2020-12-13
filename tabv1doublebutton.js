

  //************************these below code is for CRUD operation written by us */


  // this below code section for give alert message when we click the alert tab..
  function alertMessage() {
    alert("want to delete");
  }

  // this below code section for give reconfirm message when we click the delete tab..

  function confirmAlertmessage() {
    confirm("want to delete");
  }

  // --------------------------this below code for create the new data...-----------------------


  // declare the variable globally and get the table by its ID.

  var rIndex, tableData_body = document.getElementById("tableData_body");

  function openCreateForm() {

    clearForm();
    
     $("#btnEditSave").hide();
     $("#btnSubmit").show();

  }

  //Check the Empty data...

  function checkEmptydata() {

    var isEmpty = false;
    var studentname = document.getElementById("studentname").value;
    var fathername = document.getElementById("fathername").value;
    var email = document.getElementById("email").value;
    
    if (studentname == ""){
        alert("Student name field should not be empty");
        isEmpty = true;
    }else if (fathername == ""){
        alert("Father name field should not be empty");
        isEmpty = true;
     }
    else if (email == "") {
         alert("Email field should not be empty");
        isEmpty = true;
     }
    return isEmpty;
}

  function submitData() {

    //step-1 --Create the new rows and cells...
    
    if (!checkEmptydata()) {

      var newRow = tableData_body.insertRow(tableData_body.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
        

      //step-2 --Get the data and store it into corresponding variable..

      var studentname = document.getElementById("studentname").value;
      var fathername = document.getElementById("fathername").value;
      var email = document.getElementById("email").value;
     

      //Step-3 --- Set the values to corresponding row cell's.

      cell1.innerHTML = studentname;
      cell2.innerHTML = fathername;
      cell3.innerHTML = email;
      cell4.innerHTML = `<a onClick="selectedRowDisplay()" data-toggle="modal" data-target="#exampleModal"  >Edit</a>
                          <a onClick="deleteSelectedRow()">Delete</a>`;


    $("#exampleModalClose").click();

    }
  }

  function selectedRowDisplay() {

    // declared this variable globally--"var rIndex, tableData_body = document.getElementById("tableData_body")"";

     $("#btnEditSave").show();
     $("#btnSubmit").hide();


    for (i = 0; i < tableData_body.rows.length; i++) {

      tableData_body.rows[i].onclick = function() {

        // get the selected row by "this" keyword and "rowIndex" inbult keywords...
        rIndex = this.rowIndex-1;
        //console.log(this.rowIndex);

        // Then using that index value, reflect the data back to the input text box..
        document.getElementById("studentname").value = this.cells[0].innerHTML;
        document.getElementById("fathername").value = this.cells[1].innerHTML;
        document.getElementById("email").value = this.cells[2].innerHTML;

      };
    
    }
  }

  function editSelectedRowData() {

     //Save the edited the value---
 
     var sname = document.getElementById("studentname").value;
     var fname = document.getElementById("fathername").value;
     var email = document.getElementById("email").value;

     if (!checkEmptydata()) {
     tableData_body.rows[rIndex].cells[0].innerHTML = sname;
     tableData_body.rows[rIndex].cells[1].innerHTML = fname;
     tableData_body.rows[rIndex].cells[2].innerHTML = email;
     }

     $("#exampleModalClose").click();
     //clear the form's input text box once inserted the data...
     
  }

  function deleteSelectedRow() {


    tableData_body.deleteRow(rIndex);

}

  function clearForm() {

    document.getElementById("studentname").value = "";
    document.getElementById("fathername").value = "";
    document.getElementById("email").value = "";

  }
