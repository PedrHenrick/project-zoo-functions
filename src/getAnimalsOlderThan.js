const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species
    .filter((element) => element.name === animal)
    .map((nomes) => nomes.residents
      .every((idade) => idade.age >= age))[0];
}

module.exports = getAnimalsOlderThan;
