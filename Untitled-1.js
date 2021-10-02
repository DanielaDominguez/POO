const Charmander = new Pokemon('Charmander', 'Fire', ['Charmeleon', 'Charizar']);

const Squirtle = new Pokemon('Squirtle', 'Water', ['Wartortle', 'Blastoise']);

console.log((`${Charmander.name} es tipo ${Charmander.type}`));
console.log(Charmander.attack());
console.log(Charmander.evolve(5)); /* esta condicion daria falso y retornaria a la condicion inicial */
console.log((`${Charmander.name} es tipo ${Charmander.type}`));
Charmander.name = '';
console.log((`${Charmander.name}`));

console.log('-------------------------------------------------')

console.log((`${Squirtle.name} es tipo ${Squirtle.type}`));
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log((`${Squirtle.name} es tipo ${Squirtle.type}`));