const ONE_DAY_SALARY = 100000;

var returnSalary = document.getElementById("returnSalary");

returnSalary.onclick = function () {
  var workingDay = document.getElementById("workingDay");
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = "";
  if (!isNaN(workingDay.value) && workingDay.value >= 0) {
    var grossSalary = ONE_DAY_SALARY * workingDay.value;

    var pShowSalary = document.createElement("p");
    pShowSalary.innerHTML = `Tiền lương của bạn là: ${grossSalary} `;
    divContent.appendChild(pShowSalary);
  } else {
    pShowSalary = document.createElement("p");
    pShowSalary.innerHTML = `Vui lòng nhập giá trị hợp lệ.`;
    divContent.appendChild(pShowSalary);
  }
};
