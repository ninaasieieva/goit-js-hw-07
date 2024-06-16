const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", hendlerClickOk);

function hendlerClickOk(evt) {
  evt.preventDefault();
  const fData = new FormData(loginForm);
  // const form = evt.target;
  const data = {};
  fData.forEach((value, key) => {
    data[key] = value.trim();
  });

  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(data);
    loginForm.reset();
  }
}