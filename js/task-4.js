const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const email = this.elements.email.value.trim();
  const password = this.elements.password.value.trim();
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formInfo = {
    email: email,
    password: password
};
  console.log(formInfo);
  this.reset();
}
