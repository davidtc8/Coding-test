document.addEventListener("DOMContentLoaded", function () {
  // Initializing variables for DOM
  const closeButton = document.getElementById("closeButton");
  const saveButton = document.getElementById("saveButton");
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const inputC = document.getElementById("inputC");
  const resultText = document.getElementById("resultText");

  // Function when saving the values
  saveButton.addEventListener("click", function () {
    const a = parseFloat(inputA.value.trim());
    const b = parseFloat(inputB.value.trim());
    const c = parseFloat(inputC.value.trim());

    if (isNaN(a)) {
      resultText.value =
        "Invalid input for A. Please provide a numeric value.";
      inputA.classList.add("error");
      resultText.classList.add("error");
      return;
    }

    if ((isNaN(b) && isNaN(c)) || (b === null && c === null)) {
      resultText.value =
        "At least one of the input fields B or C must be filled.";
      inputB.classList.add("error");
      inputC.classList.add("error");
      resultText.classList.add("error");
      return;
    }

    if (b === 0 || c === 0) {
      resultText.value = "Error: Division by zero";
      inputB.classList.add("error");
      inputC.classList.add("error");
      resultText.classList.add("error");
      return;
    }

    let result;
    if (isNaN(b)) {
      result = a / c;
    } else if (isNaN(c)) {
      result = a + b;
    } else {
      result = (a + b) / c;
    }

    if (!Number.isFinite(result)) {
      resultText.value = "Error: Infinity result";
      inputA.classList.add("error");
      inputB.classList.add("error");
      inputC.classList.add("error");
      resultText.classList.add("error");
    } else {
      resultText.value = result;
      resultText.classList.remove("error");
    }
  });

  // Function when closing the modal
  closeButton.addEventListener('click', function() { 
    inputA.value = "";
    inputB.value = "";
    inputC.value = "";
    resultText.value = "";
  });
});
