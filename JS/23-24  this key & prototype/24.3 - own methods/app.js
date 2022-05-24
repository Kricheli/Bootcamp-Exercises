Array.prototype.mimicFilter = function(callback){
        let arr = [];
        for(let element of this){
                if(callback(element)){
                        arr.push(element)
                }
        }
        return arr;
}


Array.prototype.mimicFind = function(callback){
        for(let element of this){
                if(callback(element)){
                return element;
                }
        }
};


Array.prototype.mimicReduce = function(callback){
        let num = 0;
        for(let i=0; i<this.length; i++){
                callback((num  = this[i] + num ))
        }
        return num
}

var array = [10,67,500,30,1];
console.log(array.mimicFilter((element) => element < 68));

console.log(array.mimicFind((element) => element < 68));

console.log(array.mimicReduce((element) => element < 68));