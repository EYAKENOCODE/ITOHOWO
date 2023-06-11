function ValidationForm() {
  let username = document.forms["RegForm"]["Name"];
  let email = document.forms["RegForm"]["Email"];
  let phoneNumber = document.forms["RegForm"]["Telephone"];
  let select = document.forms["RegForm"]["Subject"];
  let pass = document.forms["RegForm"]["Password"];
  let amount = document.forms["RegForm"]["amount"];

  if(username.value == "") {
    alert("Please enter your name.");
    username.focus();
    return false;
  }
  if(email.value == "") {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(email.value.indexOf("@", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(email.value.indexOf(".", 0) < 0) {
    alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if(phoneNumber.value == "") {
    alert("Please enter your telephone number.");
    phoneNumber.focus();
    return false;
  }
  if(pass.value == "") {
    alert("Pleae state the purpose of loan");
    pass.focus();
    return false;
  }
  if(select.selectedIndex < 1) {
    alert("Please enter your course.");
    select.focus();
    return false;
  }
  if(amount.value == ""){
    alert('the amount box is empty, please fill');
    return false;
  }
  return true;
}
