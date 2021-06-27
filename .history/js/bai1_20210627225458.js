const ONE_DAY_SALARY = 1e6;

var returnSalary = document.getElementById("returnSalary");

returnSalary.onclick = function () {
  var workingDay = document.getElementById("workingDay");
  if (!isNaN(workingDay.value) && workingDay.value >= 0) {
    var grossSalary = ONE_DAY_SALARY * workingDay.value;
    var pShowSalary = document.createElement("p");
    pShowSalary.innerHTML = `Tiền lương của bạn là: ${grossSalary} `;
    divContent.appendChild(pShowSalary);
  } else {
    var resultFailure = `Vui lòng nhập giá trị hợp lệ.`;
    showResult(resultFailure);
  }
};

function showResult(result) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = "";
  pShow = document.createElement("p");
  pShow.innerHTML = resultFailure;
  divContent.appendChild(pShow);
}
