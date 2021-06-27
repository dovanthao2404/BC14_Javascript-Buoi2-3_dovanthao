const CONST_PERIMETER = 2;
var returnRectangle = document.getElementById("returnRectangle");
returnRectangle.onclick = function () {
  var width = document.getElementById("width");
  var height = document.getElementById("height");
  var divContent = document.querySelector("#divContent");
  var pShow = document.querySelectorAll("#divContent p");
  if (pShow) {
    for (var i = 0; i < pShow.length; i++) {
      divContent.removeChild(pShow[i]);
    }
  }
  if (
    isNaN(width.value) ||
    isNaN(height.value) ||
    width.value == "" ||
    height.value == ""
  ) {
    var pShow = document.createElement("p");
    pShow.innerHTML = `Vui lòng nhập số.`;
    divContent.appendChild(pShow);
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
  pShow = document.createElement("p");
  pShow.innerHTML = result;
  divContent.appendChild(pShow);
}
