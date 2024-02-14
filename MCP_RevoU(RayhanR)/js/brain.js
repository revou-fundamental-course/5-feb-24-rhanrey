function resetUnits() {
    document.getElementById("fromUnit").selectedIndex = 0;
    document.getElementById("toUnit").selectedIndex = 0;
    document.getElementById("inputNumber").value = "";
}

function swapUnits() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    document.getElementById("fromUnit").value = toUnit;
    document.getElementById("toUnit").value = fromUnit;
}

function convertTemperature() {
    const inputNumber = document.getElementById("inputNumber").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (inputNumber * 9/5) + 32;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (inputNumber - 32) * 5/9;
    } else {
        // Handle other conversion cases if needed
        result = "Invalid conversion";
    }

    document.getElementById("resultBox").innerHTML = `Hasil Konversi: ${result.toFixed(2)} ${toUnit}`;
}
