
//Mike's team
function avg([a, b, c]){
       return (a+b+c)/3;
}
const mike= avg([116,94,123]);
console.log(mike);


// John's team//
function avg2([a, b, c]){
        return (a+b+c)/3;
 }
 const john= avg2([89,120,103]);
 console.log(john);

// Mary's team//
function avg3([a, b, c]){
        return (a+b+c)/3;
 }
 const mary= avg3([97,134,105]);
 console.log(mary);

 //who will win?
 if(mike > john && mike > mary){
         console.log('Mike\'s team own!');
 }else if(john > mike && john > mary){
         console.log('John\'s team won!');
 }else if(mary > mike && mary > john){
         console.log('Mary\'s team won!');
 }else{
         console.log('There is a tie!');
 }
 
 