function countryToLiveIn(country, language, population, islsland){
        if(country == 'Italy' && language == 'English' && population < 40000000 && islsland == false){
                console.log('You should live in Finland');
        }else{
                console.log('You should not live in Finland');
        }
}

console.log(countryToLiveIn('Italy', 'English', 30, false));


