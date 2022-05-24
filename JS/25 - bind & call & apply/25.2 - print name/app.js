const person = {
        name: 'Eden',
        printName: function(){
                console.log(this.name);
        },
        timeOut: function(){
                setTimeout(this.printName.bind(this), 1000)

        }
}

person.printName();
person.timeOut();

