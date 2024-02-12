document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    // GET WIDTH OF THE RECTANGLE
    const rectangleWidthInput = document.getElementById("rectangle-width");
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width);
    // GET LENGTH OF THE RECTANGLE
    const rectLengthInput = document.getElementById("rectangle-length");
    const rectangleText = rectLengthInput.value;
    const length = parseFloat(rectangleText);
    // console.log(length);

    const area = length * width;

    const areaValue = document.getElementById("rectangle-area");
    areaValue.innerText = area;
  });
