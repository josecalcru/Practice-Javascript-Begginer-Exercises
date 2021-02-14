function getRandomInt()
{
	var randomNumber = Math.floor(Math.random()*10);
    
    while(randomNumber>6 || randomNumber==0){
        randomNumber = Math.floor(Math.random()*10)
    }

    return randomNumber;
}
console.log(getRandomInt());