/** Loop
 * 1. for loop
 */

// for loop

for (var i = 0; i<20; i++){
    // console.log('sorry');
}


/** array
 * []
 */
var friends =[ "mim", "esha", "mouly", "fahima"];
console.log(friends[1]);
console.log(friends.length);
    // print array element usimg for loop
    for(i=0; i < friends.length; i++)
    {
        var element = friends[i];
        console.log(element);
    }


/** Object
 * will have NAME of the Object
 * will have NAME of the PROPERTY of the Object 
 * & VALUE of the PROPERTY of that Object
 * {}
 * value can be String, Numeric, Array, another Object
 */
var human = {
    name: "Nuzhat",
    age: 25,
    friend: ["shimul", "niharika", "james", "robin"],
    country: "Bangladesh",
    father:{
        name: "rahim",
        age:65,
        occupation:"businessman"
    }
}

console.log(human);
console.log(human.name);
console.log(human.age);
console.log(human.friend);
console.log(human.friend[2]);
    // loop through the Array in human Object
    for(i = 0; i < human.friend.length; i++){
        console.log(human.friend[i]);
    }