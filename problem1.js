// write a function to print sorry 10 times

function writeSorry(){
    for(var i= 0; i < 10; i++ ){
        console.log("sorry!!!");
    }
}
writeSorry();

    // make it dynamic
    function writeSorryto(name){
        for(var i= 0; i < 10; i++ ){
            console.log("sorry " + name);
        }
    }
    writeSorryto("Esha");