const DIVIDEND = 5;
var numbers = document.getElementsByClassName("average__number");

var returnAverage = document.getElementById("returnAverage");

returnAverage.onclick = function () {
  var sum = total();
  handlResult(sum)
};

function total() {
  var sum = 0;
  for (var index in numbers) {
    if (
      numbers.hasOwnProperty(index) &&
      !isNaN(numbers[index].value)) {
      sum += +numbers[index].value;
    } else if (a.hasOwnProperty(index)) {
      sum += numbers[index].value;
      break;
    }
  }
  return sum;
}

function handlResult(sum) {
  if (isNaN(sum)) {
    var resultFailure = `Vui Lòng Nhập Số`;
    showResult(resultFailure);
  } else {
    var average = sum / DIVIDEND;
    var resultSuccess = `Trung Bình:  ${average}`;
    showResult(resultSuccess);
  }
}

function showResult(result) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = '';
  var pShow = document.createElement("p");
  pShow.innerHTML = result;
  divContent.appendChild(pShow);
}