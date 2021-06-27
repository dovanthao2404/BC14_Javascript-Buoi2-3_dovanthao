var returnNumber = document.getElementById("returnNumber");

returnNumber.onclick = function () {
  var number = document.getElementById("number");
  if (!isNaN(number.value)) {
    var numberABS = Math.abs(number.value);

    result = (numberABS % 10) + Math.floor(numberABS / 10);

    var pShow = document.createElement("p");
    pShow.innerHTML = `Tổng hai kí số là: ${result} `;

    divContent.appendChild(pShow);
  } else {
    var resultFailure = `Vui lòng nhập số.`; showResult
  }
};

function showResult(result) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = "";
  pShow = document.createElement("p");
  pShow.innerHTML = result;
  divContent.appendChild(pShow);
}