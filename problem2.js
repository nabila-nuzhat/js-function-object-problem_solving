// grocery total buying price

function totalExpense(item1, item2, item3){
    var total = item1 + item2 + item3;
    return total;
}

var rice = 100;
var daal = 110;
var oil = 600;

console.log(totalExpense(rice, daal, oil));