/** Function
 *  a specific event taking place for specific reason
 *  Reusable
 * 
 * Rule:
 * 1. function
 * 2. function name ()
 *    function name (parameter)
 * 3. function name () { a statement}
 *    function name (parameter) { a statement}
 * 4. call the function for executing the function by function name ()
 * 5. return, (at the very end: which can be reused somewhere
 * 6. store the "Returned" value to reuse
 * ******* console.log - log is a function and console is an Object. that is why we write console.log
 */


function nuz (){
    console.log("Hello!");
}

nuz();

function sum(num1, num2){
    console.log(num1, num2);
}

sum(10);
sum(10, 20);


function sum2(num3, num4){
    var result = num3 + num4;
    console.log(result);
}

sum2(10, 20);


function add(n1, n2){
    var total = n1 + n2;
    return total;
}
var totalSum = add(1000, 2000);
console.log(totalSum);


function minus(n1, n2){
    var total = n1 - n2;
    return total;
}
var totalMinus = minus(500, 400);
console.log(totalMinus);

const totalResult = totalMinus + totalSum;
console.log(totalResult);


