const EXCHANGE_RATE = 23500;

var amountMoney = document.getElementById("amountMoney");

var returnCurrencyExchange = document.getElementById("returnCurrencyExchange");

returnCurrencyExchange.onclick = function () {

  if (!isNaN(amountMoney.value) && amountMoney.value >= 0) {
    var totalMoney = amountMoney.value * EXCHANGE_RATE;
    var resultSuccess = `${totalMoney} VND`;
    showResult(resultSuccess);
  } else {
    var pShow = document.createElement("p");
    pShow.innerHTML = `Vui lòng nhập số.`;
    divContent.appendChild(pShow);
  }
};

function showResult(result) {
  var divContent = document.getElementById("divContent");
  divContent.innerHTML = "";
  pShow = document.createElement("p");
  pShow.innerHTML = result;
  divContent.appendChild(pShow);
}
