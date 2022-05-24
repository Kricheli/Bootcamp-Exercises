// let password = 'password';
// if (password.length > 7){
//         console.log('strong');
// }else{
//         console.log('weak');
// }

// if(password.length > 7 && password.length < 20){
//         console.log('strong');
// }

// password.length > 7 ? console.log('strong') : console.log('Weak');
 
let password = 'password';

console.log((password.length>7 && password.toLocaleLowerCase == password) ? 'very -strong' :   password.length == 7 && password.toLocaleLowerCase !== password ? 'strong' :password.length < 7 && password.toLocaleLowerCase !== password ? 'weak' : 'very weak');
