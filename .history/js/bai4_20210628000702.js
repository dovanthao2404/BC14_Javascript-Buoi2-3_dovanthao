const CONST_PERIMETER = 2;

var returnRectangle = document.getElementById("returnRectangle");

var width = document.getElementById("width");
var height = document.getElementById("height");

returnRectangle.onclick = function () {
  if (
    isNaN(width.value) ||
    isNaN(height.value) ||
    width.value == "" ||
    height.value == ""
  ) {
    var resultFailure = `Vui lòng nhập số.`;
    showResult(resultFailure);
  } else if (width.value <= 0 || height.value <= 0) {
    var resultFailure = `Vui lòng nhập số dương.`;
    showResult(resultFailure);
  } else {
    var acreage = width.value * height.value;
    var perimeter = (+width.value + +height.value) * 2;
    var pShowAcreage = document.createElement("p");
    var pShowPerimeter = document.createElement("p");
    pShowAcreage.innerHTML = `Diện tích ${acreage}`;
    divContent.appendChild(pShowAcreage);
    pShowPerimeter.innerHTML = `Chu vi ${perimeter}`;
    divContent.appendChild(pShowPerimeter);
  }
};

var acreage = (width, height) => width * height;

function showResult(result, value2) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = "";
  var pShow = document.createElement("p");
  pShow.innerHTML = result;
  divContent.appendChild(pShow);
}

