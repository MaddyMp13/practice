let display = document.getElementById("display");

display.addEventListener("input", () => {
    console.log(display.value);
})

function press(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    display.value = eval(display.value)
}

