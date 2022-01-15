const { species } = require('../data/zoo_data');

// retorna os animais de determinada localização
function locationOfAnimals(local) {
  return species.filter(({ location }) => location === local)
    .map(({ name }) => name);
}

// Retorna um objeto que auxilia na criação do locationOfAnimalsAndResidents com animais e seus residentes
function criarAnimal(animal, residentes) {
  return {
    [animal]: residentes,
  };
}

// locationOfAnimalsAndResidents retorna o nome dos animais nos seus respectivos locais e o nome dos seus residentes separados por sexo e ordenados
function allProperties(local, sexo) {
  const resultadoPorSexo = [];
  const animals = locationOfAnimals(local);
  animals.forEach((animal) => {
    const residentes = species
      .find(({ name }) => name === animal).residents
      .filter(({ sex }) => sex === sexo).map(({ name }) => name);
    resultadoPorSexo.push(criarAnimal(animal, residentes.sort()));
  });
  return resultadoPorSexo;
}

// locationOfAnimalsAndResidents retorna o nome dos animais nos seus respectivos locais e o nome dos seus residentes separados por sexo
function locationOfAnimalsAndResidentsBySex(local, sexo) {
  const resultadoPorSexo = [];
  const animals = locationOfAnimals(local);
  animals.forEach((animal) => {
    const residentes = species
      .find(({ name }) => name === animal).residents
      .filter(({ sex }) => sex === sexo).map(({ name }) => name);
    resultadoPorSexo.push(criarAnimal(animal, residentes));
  });
  return resultadoPorSexo;
}

// locationOfAnimalsAndResidents retorna o nome dos animais nos seus respectivos locais e o nome dos seus residentes ordenados
function locationOfAnimalsAndResidentsSorted(local) {
  const resultadoOrdenado = [];
  const animals = locationOfAnimals(local);
  animals.forEach((animal) => {
    const residentes = species
      .find(({ name }) => name === animal).residents
      .map((resident) => resident.name);
    resultadoOrdenado.push(criarAnimal(animal, residentes.sort()));
  });
  return resultadoOrdenado;
}

// locationOfAnimalsAndResidents retorna o nome dos animais nos seus respectivos locais e o nome dos seus residentes
function locationOfAnimalsAndResidents(local) {
  const resultado = [];
  const animals = locationOfAnimals(local);
  animals.forEach((animal) => {
    const residentes = species
      .find(({ name }) => name === animal).residents
      .map((resident) => resident.name);
    resultado.push(criarAnimal(animal, residentes));
  });
  return resultado;
}

// Essa função é responsável por retornar nosso objeto com todos os argumentos;
function tresArgumentos(options, locale) {
  const returnLocation = {};
  if (options.includeNames === true && options.sorted === true) {
    locale.forEach((local) => {
      returnLocation[local] = locationOfAnimalsAndResidentsSorted(local);
    });
  }
  if (options.includeNames && options.sex) {
    locale.forEach((local) => {
      returnLocation[local] = allProperties(local, options.sex);
    });
  }
  return returnLocation;
}

// Essa função é responsável por separar as funções com dois tipos de parâmetros, dividindo por tipo
function doisArgumentos(options, locale) {
  const returnLocation = {};
  if (options.includeNames && options.sorted) {
    locale.forEach((local) => {
      returnLocation[local] = locationOfAnimalsAndResidentsSorted(local);
    });
  }
  if (options.includeNames && options.sex) {
    locale.forEach((local) => {
      returnLocation[local] = locationOfAnimalsAndResidentsBySex(local, options.sex);
    });
  }
  return returnLocation;
}

// Essa função é responsável por criar o objeto com includeNames === true
function umArgumento(locale) {
  const returnLocation = {};
  locale.forEach((local) => {
    returnLocation[local] = locationOfAnimalsAndResidents(local);
  });
  return returnLocation;
}

// verifica quantos argumentos tem o objeto options
function IncludeNameTrue(options, locale) {
  if (Object.keys(options).length === 2) return doisArgumentos(options, locale);
  if (Object.keys(options).length === 3) return tresArgumentos(options, locale);
  return umArgumento(locale);
}

// locationAll retorna todos os animals de cada região
function locationAll(locale) {
  const returnLocation = {};
  locale.forEach((local) => {
    returnLocation[local] = locationOfAnimals(local);
  });
  return returnLocation;
}

function getAnimalMap(options = {}) {
  // seu código aqui
  const locale = species.map(({ location }) => location);
  let resultado;
  if (!options.includeNames) resultado = locationAll(locale);
  else if (options.includeNames === true) resultado = IncludeNameTrue(options, locale);
  return resultado;
}

module.exports = getAnimalMap;
