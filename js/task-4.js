const inputFormUser = document.querySelector(`.login-form`);
const submit = document.querySelector(`.login-form`);
    inputFormUser.addEventListener(`submit`, hendlerGetSubmit);

    function hendlerGetSubmit (event){
    event.preventDefault();

    // console.log(`submit`);  // перевырка роботи submit
    // console.dir(event.currentTarget);  // перевірка форми

    const {email, password} = event.currentTarget.elements;  //  деструктурізація введених знавчень
    const emailUser = (email.value).replace(" ", "");
    const passwordUser = (password.value).replace(" ", "");

    if(emailUser === "" || passwordUser === "") {
        alert (`All form fields must be filled in`)
    } else {
        const data = {
            email: emailUser,
            password: passwordUser,
        }
        console.dir(data);
        }
}