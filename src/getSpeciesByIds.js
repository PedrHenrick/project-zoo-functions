const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animal = ids
    .map((element) => species
      .find(({ id }) => id === element));
  return animal;
}

module.exports = getSpeciesByIds;
