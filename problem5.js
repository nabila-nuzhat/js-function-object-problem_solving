/** Hotel Stay
 * 1) stay 1-10 days rent: 500/day
 * 2) stay 20 days rent: after 10 days 300/ day
 * 3) stay 30 days rent: after 20 days everyday 100/day
 */

var first1to10DaysRent = 500;
var second11to20DaysRent = 300;
var after20thDayRent = 100;

if (stay <= 10){
    var totalCost = stay * first1to10DaysRent;
    console.log(totalCost);
}

else if( stay > 10 && stay <= 20){
    var first10DaysCost = 10 * first1to10DaysRent;
    var remainingDays = stay - 10;
    var totalDayCost = first10DaysCost + remainingDays * second11to20DaysRent

    console.log(totalDayCost);
}

else {
    var first10DaysCost = 10 * first1to10DaysRent;
        var  second11to20DaysCost = 10 * second11to20DaysRent;

            var remainingAfter20Days = stay - 20;

            var totalDayCostOver20 = first10DaysCost + second11to20DaysCost + remainingAfter20Days * after20thDayRent

            console.log(totalDayCostOver20);
}

