function validateForm() {
  var nameInput = document.getElementById("fullname").value;

  var error = 0;
  /* Name Validation  */
  nameregex = /^ (a-zA-Z) $/;
  if (nameInput.trim() == "") {
    alert("Please Enter your name");
    error++;
  } else if (!nameregex.test(nameInput)) {
    document.getElementById("err_name").innerHTML =
      "Enter The correct format of Name";
      error++;
  }

  if(error < 0 ){
    alert('Data Submitted');
  }
}
