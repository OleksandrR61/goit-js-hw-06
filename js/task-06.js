document.querySelector("#validation-input").addEventListener("blur", ({ target }) => {
    if (target.value.length === Number(target.dataset.length)) {
        target.classList.add("valid");
        target.classList.remove("invalid");
    } else {
        target.classList.add("invalid");
        target.classList.remove("valid");
    }
});