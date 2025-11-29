function press(num) {
    document.getElementById("display").value += num;
}

function calculate() {
    let val = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(val);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
