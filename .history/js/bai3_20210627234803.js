const EXCHANGE_RATE = 23500;

var amountMoney = document.getElementById("amountMoney");

var returnCurrencyExchange = document.getElementById("returnCurrencyExchange");

returnCurrencyExchange.onclick = function () {
  var pShow = document.querySelector("#divContent");
  pShow.innerHTML = ""

  if (!isNaN(amountMoney.value) && amountMoney.value >= 0) {
    var totalMoney = amountMoney.value * EXCHANGE_RATE;
    var pShow = document.createElement("p");
    pShow.innerHTML = `${totalMoney} VND`;
    divContent.appendChild(pShow);
  } else {
    var pShow = document.createElement("p");
    pShow.innerHTML = `Vui lòng nhập số.`;
    divContent.appendChild(pShow);
  }
};
