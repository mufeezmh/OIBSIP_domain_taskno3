function convertTemp() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let converted;

  if (fromUnit === toUnit) {
    converted = temp;
  } else if (fromUnit === "C") {
    if (toUnit === "F") converted = (temp * 9/5) + 32;
    if (toUnit === "K") converted = temp + 273.15;
  } else if (fromUnit === "F") {
    if (toUnit === "C") converted = (temp - 32) * 5/9;
    if (toUnit === "K") converted = ((temp - 32) * 5/9) + 273.15;
  } else if (fromUnit === "K") {
    if (toUnit === "C") converted = temp - 273.15;
    if (toUnit === "F") converted = ((temp - 273.15) * 9/5) + 32;
  }

  converted = converted.toFixed(2);
  const unitSymbol = toUnit === "C" ? "°C" : (toUnit === "F" ? "°F" : "K");
  result.textContent = `Converted Temperature: ${converted} ${unitSymbol}`;
}
