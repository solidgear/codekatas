In this game we asume we are involved in a melee combat between two opponent heroes: player1 and player2.
Every hero has an attack value and a defense value.
The attack is resolved as follows: 
player1 (attacker) throws two eight-sided dice and add their attack value.
If this total value exceed (not equalize) the player2's defense value, player1's attack sucess. Note: defender doesn’t throw any dice.
There are two more things to take into account:
player1 can boost their attack throwing an extra eight-sized die (this attack throws now 3 eight-sided dice)
player2 can boost their defense adding +2 to the original defense value.

Create a function to calculate the percentage of success of a player1's attack in this tabletop combat game. 

Example:
Pepito attacks Paquito using Superman. Paquito defends with Batman. Pepito do not want to boost Superman’s attack but Paquito wants to improve his Batman’s defense. So the method parameters should be:
player1:superman player2:batman boostedatack:false boosteddefense:true


Hero stats (the user can decide to include any pair of heroes of this list as parameters in the method. player1 and player2 can be the same hero)
Superman: attack = 6, defense = 15
Batman: attack = 7, defense = 16
Wonder Woman: attack = 7, defense = 16
Hulk: attack = 6, defense = 15
Iron Man: attack = 6, defense = 14
Captain America: attack = 7, defense = 17    
Rogue: attack = 5, defense = 16
Groot: attack = 5, defense = 16
Gamora: attack = 7, defense = 15