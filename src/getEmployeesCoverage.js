const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getNameById(id) {
  return species.find((animalName) => animalName.id === id).name; // Devolve o nome do animal
}

function getLocationsById(id) {
  return species.find((animalLocations) => animalLocations.id === id).location; // Devolve a localização do animal
}

function getSpecificById(specId) {
  return employees.some((personId) => personId.id === specId); // Devolve true se existir o id do funcioário no banco de dados
}

function getSpecificByName(specName) {
  return employees
    .some((personName) => personName.firstName === specName || personName.lastName === specName); // Devolve true se existir o nome do funcioário no banco de dados
}

function returnAll() { // retorna todos os funcionarios existentes
  return employees.map((funcionar) => {
    const fun = { id: funcionar.id,
      fullName: `${funcionar.firstName} ${funcionar.lastName}`,
      species: funcionar.responsibleFor.map((id) => getNameById(id)),
      locations: funcionar.responsibleFor.map((id) => getLocationsById(id)) };
    return fun;
  });
}

function specificReturn(argumento, specificId, specificName) {
  if (specificId) { // imprime somente o funcionario com o id específico
    const employeee = employees.find((employee) => employee.id === argumento[0].id);
    return { id: employeee.id,
      fullName: `${employeee.firstName} ${employeee.lastName}`,
      species: employeee.responsibleFor.map((id) => getNameById(id)),
      locations: employeee.responsibleFor.map((id) => getLocationsById(id)) };
  }
  if (specificName) { // imprime somente o funcionario com o nome específico
    const employeee = employees
      .find((employee) => employee.firstName === argumento[0].name
      || employee.lastName === argumento[0].name);
    return { id: employeee.id,
      fullName: `${employeee.firstName} ${employeee.lastName}`,
      species: employeee.responsibleFor.map((id) => getNameById(id)),
      locations: employeee.responsibleFor.map((id) => getLocationsById(id)) };
  }
  if (!specificId && !specificName) throw new Error('Informações inválidas'); // retorna erro caso o funcionario não exista no banco de dados
}

function getEmployeesCoverage(...argumento) {
  if (argumento[0] === undefined) return returnAll();
  if (argumento) {
    const specificId = argumento.map((specId) => getSpecificById(specId.id))[0]; // recebe o retorno da conferência no dados
    const specificName = argumento.map((specName) => getSpecificByName(specName.name))[0]; // recebe o retorno da conferência no dados
    return specificReturn(argumento, specificId, specificName);
  }
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Pedro' }));

module.exports = getEmployeesCoverage;
