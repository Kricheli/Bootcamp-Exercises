function boom(n){
        for(let i = 1; i <= n; i++){
                       if(i % 7 == 0){
                       console.log('boom');
                       }
               if(i.toString().includes('7') && i % 7 == 0){
                        console.log('boom-boom');
                }
                else{console.log(i);
                }
        }
}


