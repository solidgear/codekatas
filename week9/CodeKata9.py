class Pokemon:
    def __init__(self, name = "Pidgey", attack = "Placaje"):
    # A pokemon always must have a name and an attack
        self.name = name
        self.attack = attack
    def getName(self):
        return self.name
    def getAttack(self):
        return self.attack

class PokemonTrainer:
    def orderAttack(self, pokemon):
        # A good trainer always check that what he has is a pokemon
        if (isinstance(pokemon, Pokemon)):
            print(pokemon.getName() + " " + pokemon.getAttack() + "!")

mypokemon1 = Pokemon("Pikachu", "Impactrueno")
mypokemon2 = Pokemon()

trainer = PokemonTrainer()
trainer.orderAttack(mypokemon1)
trainer.orderAttack(mypokemon2)
trainer.orderAttack(???)

# Console:
# Pikachu impactrueno!
# Pidgey Placaje!
# AttributeError
