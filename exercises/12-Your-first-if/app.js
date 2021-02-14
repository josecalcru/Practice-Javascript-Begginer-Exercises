var total = prompt('How many km are left to go?');

// Your code below:

if(parseInt(total)>100){
    return console.log("We still have a bit of driving left to go");
}
else if(parseInt(total)<100 && parseInt(total)>50){
    return console.log("We'll be there in 5 minutes");
}
else{
    return console.log("I'm parking. I'll see you right now");

}