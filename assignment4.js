//Problem1
function mindGame(number) {
    const result = (number * 3 + 10) / 2 - 5;
    console.log(result);
}
mindGame(33);

//Problem2
function evenOdd(givenString){
    let ourString = givenString;
    let OurStringLength = ourString.length;
    const reminder = OurStringLength % 2;
    if(reminder === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }    
}
evenOdd("chatgpt");

//Problem3
function isLGSeven(number){
    const result = number - 7;
    if(result < 7){        
        console.log(result);
    }
    else{
        var doubleOfTheInput = number * 2;
        console.log(doubleOfTheInput);
    }
}
isLGSeven(6);
