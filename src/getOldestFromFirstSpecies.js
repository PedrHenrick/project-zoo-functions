const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const resident = species.find((specie) => specie.id === animalId).residents;
  return Object.values(resident.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
