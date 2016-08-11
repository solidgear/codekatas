class Pokemon {
    // A pokemon always must have a name and an attack
    var name: String
    var attack: String

    init(name: String = "Pidgey", attack: String = "Placaje") {
        self.name = name
        self.attack = attack
    }

    func getName() -> String {
        return self.name
    }

    func getAttack() -> String {
        return self.attack
    }
}

class PokemonTrainer {
    // A good trainer always check that what he has is a pokemon
    func orderAttack(pokemon:Pokemon) {
        print(pokemon.getName())
    }
}

var mypokemon1 = Pokemon("Pikachu", "Impactrueno")
var mypokemon2 = Pokemon()

var trainer = PokemonTrainer()
trainer.orderAttack(mypokemon1)
trainer.orderAttack(mypokemon2)
trainer.orderAttack(???)

// Console:
// Pikachu impactrueno!
// Pidgey Placaje!
// error: nil is not compatible with expected argument type '[Any]'

