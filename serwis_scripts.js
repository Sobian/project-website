function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

//   <input type="text" id="mail" placeholder="podaj adres email" class="txt"/>
//                 <input type="text" placeholder="imie" id="name" class="txt"/>
//                 <input type="text" placeholder="nazwisko" id="surname" class="txt"/>
//                 <input type="text" placeholder="nr telefonu" id="phone" class="txt"/>

  function checkValidityMail() {const inpObj = document.getElementById("mail");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }}

  function checkValidityName() {const inpObj = document.getElementById("name");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }}

  function checkValiditySurname() {const inpObj = document.getElementById("surname");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }}

  function checkValidityPhone() {const inpObj = document.getElementById("phone");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }}