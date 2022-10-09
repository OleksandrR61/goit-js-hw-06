document.querySelector("#name-input").addEventListener("input", ({ target }) => {
    document.querySelector("#name-output").textContent = target.value
        ? target.value
        : "Anonymous";
});