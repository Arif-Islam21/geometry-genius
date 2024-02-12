document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    // GET WIDTH OF THE RECTANGLE
    input("rectangle-width");
    input("rectangle-length");

    const area = length * width;

    const areaValue = document.getElementById("rectangle-area");
    areaValue.innerText = area;
  });
