// reusable function for bicep, tricep, chest etc Worout

function workOut(workoutName){

    var bicepWorkOut  = ["cable curl", "dumbbell curl", "bicep curl"]
    var chestWorkout = ["chest fly", "chest press", "chest"]
    var tricepWorkOut = ["dip", "skull crusher", "tricep pushdown"]

    if(workoutName == "chest"){
        return chestWorkout;
    }
    else if (workoutName == "bicep"){
        return bicepWorkOut;
    }
    else if (workoutName == "tricep"){
        return tricepWorkOut;
    }
    else {
        return "no workout found"
    }
}


var workOutPlan = workOut("bicep");
console.log(workOutPlan);
var workOutPlan = workOut("squat");
console.log(workOutPlan);
var workOutPlan = workOut("tricep");
console.log(workOutPlan);

