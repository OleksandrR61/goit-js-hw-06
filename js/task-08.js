document.querySelector(".login-form").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const dataForm = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value,
    };
    
    if (dataForm.email === "" || dataForm.password === "") {
        alert("Все поля должны быть заполнены!!!");
        return;
    };

    console.log(dataForm);

    event.currentTarget.reset();
};