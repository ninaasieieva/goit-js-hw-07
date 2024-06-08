const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerInput);

function handlerInput(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  }
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  evt.currentTarget.reset();

  console.log(data);
}