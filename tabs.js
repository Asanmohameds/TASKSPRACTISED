function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function loadTable() {
debugger;
  var _table = localStorage.getItem("tablelist");
  if(_table) 
  {
  var tableData = JSON.parse(_table);

  $("#tableData_body").html("");
  for (let index = 0; index < tableData.length; index++) {
   
   var rowdata = tableData[index];
 var tr_str ="<tr>"+
 "<td>"+rowdata.sno+"</td>"+
 "<td>"+rowdata.studentname+"</td>"+
 "<td>"+rowdata.fname+"</td>"+
 "<td>"+rowdata.gender+"</td>"+
 "<td>"+rowdata.dob+"</td>"+
 "<td>"+rowdata.department+"</td>"+
 "<td>"+rowdata.address+"</td>"+
 "<td>"+rowdata.email+"</td>"+
 "<td>"+rowdata.age+"</td>"+
 "<td>"+rowdata.password+"</td>"+
 "<td>"+rowdata.confirmpassword+"</td>"+
 "<td>"+ `<a name="`+rowdata.sno+`" data-toggle="modal" data-target="#exampleModal" onClick="onEditNew(this)">Edit</a>
 <a name="`+rowdata.sno+`" onClick="onDelete(this)">Delete</a>`+"</td>"+
            "</tr>"   ;

   $("#tableData_body").append(tr_str);
  }
  }

}

loadTable()
// Alert tab message

function alertMessage() {
  alert("want to delete");
}

// Confirm Alert tab message

function confirmAlertmessage() {
  confirm("want to delete");
}


// this content below for storing to local storage.

var selectedRow = null;
function submitData() {
  if (validateForm()) {
    var formData = readfrom();
    
     // insertNewRecord(formData);
      
      //  var tabledata = JSON.stringify(formData);
      // localStorage.setItem("tabledata", tabledata);
debugger;
      if(!selectedRow)  {
        
        // to retrive the data from the local storage to our web page...we use getitem keyword..
      var _table = localStorage.getItem("tablelist");
      var _tableData = [];
      if(_table)
      var _tableData = JSON.parse(_table);

      _tableData.push(formData);

// this below two lines convert the JSON format from string format. which we can read.
      var tabledata = JSON.stringify(_tableData);

      //to store the data to local...we use setitem.
      localStorage.setItem("tablelist", tabledata);

      loadTable();

      }
      
    else 
      updateRecord(formData);
    //resetForm();

  }
  
  
  

}

function readfrom(){debugger
  // this below two lines convert the JSON object into string format by parse method. which we can read.

  var formData = {};
  formData["sno"] = document.getElementById("sno").value;
  formData["studentname"] = document.getElementById("studentname").value;
  formData["fname"] = document.getElementById("fname").value;
  formData["gender"] = document.getElementById("gender").value;
  formData["dob"] = document.getElementById("dob").value;
  formData["department"] = document.getElementById("department").value;
  formData["address"] = document.getElementById("address").value;
  formData["email"] = document.getElementById("email").value;
  formData["age"] = document.getElementById("age").value;
  formData["password"] = document.getElementById("password").value;
  formData["confirmpassword"] = document.getElementById("confirmpassword").value;
  formData["checkbox"] = document.getElementById("checkbox").value;
  return formData;
}
  

// data return from local storage to our website table.
// function datareturnfromLocalstorage() {

// }

function insertNewRecord(data) {
  var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
 //var table =$("#employeeList tbody")[0];

 var newRow = table.insertRow(table.length);
 cell1 = newRow.insertCell(0);
 cell1.innerHTML = data.studentname;
 cell2 = newRow.insertCell(1);
 cell2.innerHTML = data.fname;
 cell3 = newRow.insertCell(2);
 cell3.innerHTML = data.gender;
 cell4 = newRow.insertCell(3);
 cell4.innerHTML = data.dob;
 cell5 = newRow.insertCell(4);
 cell5.innerHTML = data.department;
 cell6 = newRow.insertCell(5);
 cell6.innerHTML = data.address;
 cell7 = newRow.insertCell(6);
 cell7.innerHTML = data.email;
 cell8 = newRow.insertCell(7);
 cell8.innerHTML = data.age;
 cell9 = newRow.insertCell(8);
 cell9.innerHTML = data.password;
 cell10 = newRow.insertCell(9);
 cell10.innerHTML = data.confirmpassword;
 cell11 = newRow.insertCell(10);
 cell11.innerHTML = `<a data-toggle="modal" data-target="#exampleModal" onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)">Delete</a>`;
}

// after submitting the form reset, the form..

function resetForm() {
  document.getElementById("sno").value = "";
  document.getElementById("studentname").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("department").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmpassword").value = "";
  selectedRow = null;
}

function onEdit(td) {debugger;
  selectedRow = td.parentElement.parentElement;
  document.getElementById("sno").value = selectedRow.cells[0].innerHTML;
  document.getElementById("studentname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("fname").value = selectedRow.cells[2].innerHTML;
  document.getElementById("gender").value = selectedRow.cells[3].innerHTML;
  document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
  document.getElementById("department").value = selectedRow.cells[5].innerHTML;
  document.getElementById("address").value = selectedRow.cells[6].innerHTML;
  document.getElementById("email").value = selectedRow.cells[7].innerHTML;
  document.getElementById("age").value = selectedRow.cells[8].innerHTML;
  document.getElementById("password").value = selectedRow.cells[9].innerHTML;
  document.getElementById("confirmpassword").value = selectedRow.cells[10].innerHTML;
}

function onEditNew(element) {
debugger;
var Sid =element.name;


var _table = localStorage.getItem("tablelist");
   var tableData = JSON.parse(_table);
var editobj = tableData.filter(x => {
  return x.sno ===Sid
})

selectedRow =1;

document.getElementById("sno").value = editobj[0].sno;
  document.getElementById("studentname").value =  editobj[0].studentname;
  document.getElementById("fname").value = editobj[0].fname;
  document.getElementById("gender").value = editobj[0].gender;
  document.getElementById("dob").value = editobj[0].dob;
  document.getElementById("department").value = editobj[0].department;
  document.getElementById("address").value = editobj[0].address;
  document.getElementById("email").value = editobj[0].email;
  document.getElementById("age").value = editobj[0].age;
  document.getElementById("password").value = editobj[0].password;
  document.getElementById("confirmpassword").value = editobj[0].confirmpassword;
}



function updateRecord(formData) {

debugger;
  var _table = localStorage.getItem("tablelist");
   var table = JSON.parse(_table);
    var _tableData = table.map(x => {
      x= formData
      return x;
    })


var tabledata = JSON.stringify(_tableData);
//to store the data to local...we use setitem.
localStorage.setItem("tablelist", tabledata);

loadTable()

}


  // selectedRow.cells[0].innerHTML = formData.sno;
  // selectedRow.cells[1].innerHTML = formData.studentname;
  // selectedRow.cells[2].innerHTML = formData.fname;
  // selectedRow.cells[3].innerHTML = formData.gender;
  // selectedRow.cells[4].innerHTML = formData.dob;
  // selectedRow.cells[5].innerHTML = formData.department;
  // selectedRow.cells[6].innerHTML = formData.address;
  // selectedRow.cells[7].innerHTML = formData.email;
  // selectedRow.cells[8].innerHTML = formData.age;
  // selectedRow.cells[9].innerHTML = formData.password;
  // selectedRow.cells[10].innerHTML = formData.confirmpassword;
// }

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("tableData").deleteRow(row.rowIndex);
      resetForm();
  }
}
  function validateForm() {
    isValid = true;
    if (document.getElementById("sno").value == "") {
        isValid = false;
        document.getElementById("snoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("snoValidationError").classList.contains("hide"))
            document.getElementById("snoValidationError").classList.add("hide");
    }
    return isValid;
}
