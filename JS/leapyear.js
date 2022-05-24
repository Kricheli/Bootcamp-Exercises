function leapyear(year){
        if(year % 4 == 0 && year % 100 !== 0){
                console.log('It is indeed a leap year')
        }else{
                console.log('This is not a leap year.')
        }
}
const leapyear1 = leapyear(2400);
console.log(leapyear1);