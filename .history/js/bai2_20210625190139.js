const DIVIDEND = 5;
var a = document.getElementsByClassName("average__number");

var returnAverage = document.getElementById("returnAverage");

returnAverage.onclick = function () {
  var pShow = document.querySelector("#divContent p");
  if (pShow != null) {
    pShow.remove();
  }
  var sum = 0;
  for (var index in a) {
    if (a.hasOwnProperty(index) && !isNaN(a[index].value)) {
      sum += +a[index].value;
    } else if (a.hasOwnProperty(index)) {
      sum += a[index].value;
      break;
    }
  }
  if (isNaN(sum)) {
    var pShowAverage = document.createElement("p");
    pShowAverage.innerHTML = `Vui Lòng Nhập Số`;

    divContent.appendChild(pShowAverage);
  } else {
    var average = sum / DIVIDEND;
    var pShowAverage = document.createElement("p");
    pShowAverage.innerHTML = `Trung Bình:  ${average}`;

    divContent.appendChild(pShowAverage);
  }
};
