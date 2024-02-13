function input(id) {
  const input = document.getElementById(id);
  const text = input.value;
  const length = parseFloat(text);
  return length;
}

// getting the common way
function setAreaText(id, areaValue) {
  const areaValueText = document.getElementById(id);
  areaValueText.innerText = areaValue;
}
