var intialPrice = document.querySelector("#Intial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(intial, quantity, current){
    if(intial > current){
        var loss = (intial - current) * quantity;
        var lossPercentage = (loss/intial) * 100;

        showOutput(`Hey, the loss is ${loss} and the percentage is ${lossPercentage}`)
    }else if(current > intial){
        var profit = (current - intial) * quantity;
        var profitPercentage = (profit/intial) * 100;
        showOutput(`Hey, the Profit is ${profit} and the percentage is ${profitPercentage}`)
    }else{
        showOutput("No pain , no gain.")
    }
}
function showOutput(message){
    outputBox.innerText = message;
};

function submitHandler(){
    var ip = Number(intialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip,qty,curr);
}
submitBtn.addEventListener("click", submitHandler);