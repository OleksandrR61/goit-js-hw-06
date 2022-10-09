const valueRef = document.querySelector("#value");

document.querySelector("[data-action = 'decrement']").addEventListener("click", () => {
    valueRef.textContent -= 1;
});

document.querySelector("[data-action = 'increment']").addEventListener("click", () => {
    valueRef.textContent = Number(valueRef.textContent) + 1;
});