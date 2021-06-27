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
    var acreage = acreage(width, height)
    var perimeter = perimeter(width, height);
    var resultAcreage = `Diện tích ${acreage}`;
    var resultPerimeter = `Chu vi ${perimeter}`;
    function showResult(resultAcreage, resultPerimeter) {

    }
  };

  var acreage = (width, height) => width * height;

  var perimeter = (width, height) => (width + height) * 2;

  function showResult(result, result2) {
    var divContent = document.getElementById("divContent");
    divContent.innerHTML = "";
    var pShow = document.createElement("p");
    pShow.innerHTML = result;
    divContent.appendChild(pShow);
  }

