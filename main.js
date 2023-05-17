const submitButton = document.getElementById("confirmButton");

submitButton.addEventListener("click", () => {
  /* ! user data */
  let fullName = document.getElementById("name");
  let cardNumber = document.getElementById("cardNumber");
  let expMonth = document.getElementById("expMonth");
  let expYear = document.getElementById("expYear");
  let cvc = document.getElementById("cvc");

  let errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.classList.add("hidden");
  });

  let err = 0;
  if (fullName.value == "") {
    document.getElementById("blankName").classList.remove("hidden");
    fullName.style.border = "1px solid red";
    err++;
  } else {
    document.getElementById("yourName").innerHTML = fullName.value;
  }

  if (isNaN(cardNumber.value)) {
    document.getElementById("Nan").classList.remove("hidden");
    cardNumber.style.border = "1px solid red";
    err++;
  } else if (cardNumber.value == "") {
    document.getElementById("blankNumber").classList.remove("hidden");
    cardNumber.style.border = "1px solid red";
    err++;
  } else {
    document.getElementById("yourCardNumber").innerHTML = cardNumber.value;
  }

  if (expMonth.value == "") {
    document.getElementById("blankData").classList.remove("hidden");
    expMonth.style.border = "1px solid red";
    err++;
  } else {
    document.getElementById("yourExpMonth").innerHTML = expMonth.value;
  }
  if (expYear.value == "") {
    document.getElementById("blankData").classList.remove("hidden");
    expYear.style.border = "1px solid red";
    err++;
  } else {
    document.getElementById("yourExpYear").innerHTML = expYear.value;
  }

  if (cvc.value == "") {
    document.getElementById("blankCvc").classList.remove("hidden");
    cvc.style.border = "1px solid red";
    err++;
  } else {
    document.getElementById("yourCvc").innerHTML = cvc.value;
  }

  if (err == 0) {
    document.getElementById("form").classList.add("hidden");
    document.getElementById("formSubmitted").classList.remove("hidden");
  }
});
