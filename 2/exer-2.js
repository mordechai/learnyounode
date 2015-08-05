
var answer = 0;
function calcArray(someArray){
for (var i = 2; i < someArray.length; i++) {
    answer += Number(someArray[i]);
};	
}

calcArray(process.argv)	
console.log(answer)
