const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animal = ids
    .map((element) => data.species
      .find((item) => item.id === element));
  return animal;
}

module.exports = getSpeciesByIds;
