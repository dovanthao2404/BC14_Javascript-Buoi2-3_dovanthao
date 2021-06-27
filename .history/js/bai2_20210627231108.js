const DIVIDEND = 5;
var a = document.getElementsByClassName("average__number");

var returnAverage = document.getElementById("returnAverage");

returnAverage.onclick = function () {
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
    var resultFailure = `Vui Lòng Nhập Số`;
    showResult(resultFailure);
  } else {
    var average = (a + b + c + d + e) / DIVIDEND;
    var resultSuccess = `Trung Bình:  ${average}`;
    showResult(resultSuccess);
  }
};

function showResult(result) {
  var pShow = document.createElement("p");
  var returnAverage = document.getElementById("returnAverage");
  returnAverage = ''
  pShow = result;
  returnAverage.appendChild(pShow);
}