const form = document.querySelector('form.login-form')
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert(`Все поля должны быть заполнены!`)
  }

  const formResult = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    formResult[name] = value;
  })

  console.log(formResult);
form.reset();
}
