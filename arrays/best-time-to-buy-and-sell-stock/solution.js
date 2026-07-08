// Best Time to Buy and Sell Stock
var bruteMaxProfit = function(prices) {
    let profit = 0;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++){
            profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}
var res = bruteMaxProfit([7, 6, 4, 3, 1]);
console.log(res);

var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
}
var result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);
