const CONST_PERIMETER = 2;

var returnRectangle = document.getElementById("returnRectangle");


returnRectangle.onclick = function () {
  var width = +document.getElementById("width").value;
  var height = +document.getElementById("height").value;
  if (
    isNaN(width) ||
    isNaN(height) ||
    width == "" ||
    height == ""
  ) {
    var resultFailure = `Vui lòng nhập số.`;
    showResult(resultFailure);
  } else if (width <= 0 || height <= 0) {
    var resultFailure = `Vui lòng nhập số dương.`;
    showResult(resultFailure);
  } else {
    var acreage = acreage(width, height);
    var perimeter = perimeter(width, height);
    var resultAcreage = `Diện tích: ${acreage.toFixed(2)}`;
    var resultPerimeter = `Chu vi: ${perimeter.toFixed(2)}`;
    showResult(resultAcreage, resultPerimeter);
  };

  function acreage(width, height) {
    return width * height
  };

  function perimeter(width, height) {
    return (width + height) * 2
  };

  function showResult(result, result1) {
    console.log("a");
    var divContent = document.getElementById("divContent");
    divContent.innerHTML = "";
    var pShowResult = document.createElement("p");
    pShowResult.innerHTML = result;
    divContent.appendChild(pShowResult);
    if (result1) {
      var pShowResult1 = document.createElement("p");
      pShowResult1.innerHTML = result1;
      divContent.appendChild(pShowResult1);
    }
  }
}