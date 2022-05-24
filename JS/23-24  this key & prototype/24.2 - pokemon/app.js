function Pokemon(pokemonName, pokemonType, pokemonAttackList){
        this.name = pokemonName;
        this.type = pokemonType;
        this.attackList = pokemonAttackList;
        }


Pokemon.prototype.callPokemon = function(){
        console.log(`I choose you ${this.name}`);
}

Pokemon.prototype.attack = function(attackNumber){
        console.log(`${this.name} used ${this.attackList[attackNumber]}`);
}

const mew = new Pokemon("mew", "psychic", ["fire", "water", "knife"]);

const dartini = new Pokemon("dartini", "dragon", ["ice", "fire","wind"]);

const sonerlax = new Pokemon("snorlax", "normal", ["eating", "stone", "wind"]);

console.log(mew.callPokemon());
console.log(dartini.callPokemon());
console.log(sonerlax.callPokemon());

console.log(mew.attack(0));
console.log(dartini.attack(0));
console.log(sonerlax.attack(0));