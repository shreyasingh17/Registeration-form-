var registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var userNameInput = document.getElementById("userName");
  var emailInput = document.getElementById("email");
  var phoneNumberInput = document.getElementById("phoneNumber");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");

  var isValid = true;

  clearErrorMessages();

  if (!validateUserName(userNameInput)) {
    isValid = false;
  }

  if (!validateEmail(emailInput)) {
    isValid = false;
  }

  if (!validatePhoneNumber(phoneNumberInput)) {
    isValid = false;
  }

  if (!validatePassword(passwordInput)) {
    isValid = false;
  }

  if (!validateConfirmPassword(passwordInput, confirmPasswordInput)) {
    isValid = false;
  }

  if (isValid) {
    displayData(userNameInput.value, emailInput.value, phoneNumberInput.value);
  }
});

function validateUserName(input) {
  var value = input.value.trim();
  if (value === "") {
    showError(input, "User Name is required", "userNameError");
    return false;
  }
  return true;
}

function validateEmail(input) {
  var value = input.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    showError(input, "Invalid email address", "emailError");
    return false;
  }
  return true;
}

function validatePhoneNumber(input) {
  var value = input.value.trim();
  var phoneNumberRegex = /^\d{10}$/;
  if (!phoneNumberRegex.test(value)) {
    showError(input, "Invalid phone number", "phoneNumberError");
    return false;
  }
  return true;
}

function validatePassword(input) {
  var value = input.value.trim();
  if (value === "") {
    showError(input, "Password is required", "passwordError");
    return false;
  }
  return true;
}

function validateConfirmPassword(passwordInput, confirmPasswordInput) {
  var passwordValue = passwordInput.value.trim();
  var confirmPasswordValue = confirmPasswordInput.value.trim();
  if (confirmPasswordValue === "") {
    showError(confirmPasswordInput, "Confirm Password is required", "confirmPasswordError");
    return false;
  } else if (passwordValue !== confirmPasswordValue) {
    showError(confirmPasswordInput, "Passwords do not match", "confirmPasswordError");
    return false;
  }
  return true;
}

function showError(input, message, errorId) {
  input.classList.add("error");
  var errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
}

function clearErrorMessages() {
  var errorElements = document.getElementsByClassName("error-message");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}

function displayData(userName, email, phoneNumber) {
  var displayDataDiv = document.getElementById("displayData");
  displayDataDiv.innerHTML = `
    <h2>Registration Details</h2>
    <p><strong>User Name:</strong> ${userName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
  `;
}
