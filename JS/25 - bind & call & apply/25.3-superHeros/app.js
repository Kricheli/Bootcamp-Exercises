const wonderWoman = {
        name: "Diana Prince"
      }
      const batman = {
        name: "Bruce Wayne"
      }
      const superHeroes = [wonderWoman, batman];

      function printName() {
        console.log(`my name is ${this.name}`);
      }
      function printHeroes(heroes, printFunc) {
        //add your code here
        superHeroes.forEach((hero) => {
                printName.call(hero)}
        )
      }
      printHeroes();