const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const listAnimal = species
      .reduce((acc, item) => {
        acc[item.name] = item.residents.length;
        return acc;
      }, {});
    return listAnimal;
  }
  if (!animal.sex) {
    const specificAnimal = species
      .find(({ name }) => name === animal.specie).residents.length;
    return specificAnimal;
  }
  const specificAnimal = species
    .find(({ name }) => name === animal.specie).residents
    .filter(({ sex }) => sex === animal.sex).length;
  return specificAnimal;
}
// console.log(countAnimals());

module.exports = countAnimals;
