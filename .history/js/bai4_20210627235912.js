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
    var pShow = document.createElement("p");
    pShow.innerHTML = `Vui lòng nhập số.`;
    divContent.appendChild(pShow);
    showResult(resultFailure);
  } else if (width.value <= 0 || height.value <= 0) {
    var pShow = document.createElement("p");
    pShow.innerHTML = `Vui lòng nhập số dương.`;
    divContent.appendChild(pShow);
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

function showResult(result) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = "";
}

