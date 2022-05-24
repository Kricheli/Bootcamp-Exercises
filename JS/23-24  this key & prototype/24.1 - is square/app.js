function Square(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

Square.prototype.isSquare = function(){
        if(this.a === this.b && this.a === this.c && this.c === this.d) {
                return true
        }else{
                return false
        }}

const trueSquare = new Square(1,1,1,1);
const falseSquare = new Square(2,3,4,5);

console.log(trueSquare.isSquare());
console.log(falseSquare.isSquare());