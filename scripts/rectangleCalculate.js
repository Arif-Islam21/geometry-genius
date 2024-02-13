document
  .getElementById("rectangle-calculate-btn")
  .addEventListener("click", function () {
    // GET WIDTH OF THE RECTANGLE
    const length = input("rectangle-width");
    const width = input("rectangle-length");

    const area = length * width;

    setAreaText("rectangle-area", area);
  });

// FOR PARALLOGRAM
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const width = input("parallelogram-width");
    const length = input("parallelogram-length");
    const area = width * length;
    setAreaText("parallelogram-area", area);
  });

// FOR RHOMBUS
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const width = input("rhombus-width");
  const length = input("rhombus-length");
  const area = 0.5 * width * length;
  setAreaText("rhombus-area", area);
});
