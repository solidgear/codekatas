function Pokemon(name, attack) {
    // A pokemon always must have a name and an attack
    this.name = name ? name : "Pidgey";
    this.attack = attack ? attack: "Placaje";
}

Pokemon.prototype.getName = function() {
    return this.name;
}

Pokemon.prototype.getAttack = function() {
    return this.attack;
}

function PokemonTrainer() {
}

PokemonTrainer.prototype.orderAttack = function(pokemon) {
    // A good trainer always check that what he has is a pokemon
    if (pokemon instanceof Pokemon) {
        console.log(pokemon.name + " " + pokemon.attack + "!");
    }
}

var mypokemon1 = new Pokemon("Pikachu", "Impactrueno");
var mypokemon2 = new Pokemon();

var ev = new PokemonTrainer();
ev.orderAttack(mypokemon1);
ev.orderAttack(mypokemon2);
ev.orderAttack(???);

// Console:
// Pikachu impactrueno!
// Pidgey Placaje!
// undefined undefined!      // Object undefined, not string