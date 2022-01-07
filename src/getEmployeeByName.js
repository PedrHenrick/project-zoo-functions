const data = require('../data/zoo_data');

function getEmployeeByName(...employeeName) {
  // seu código aqui
  const func = employeeName
    .map((pessoa) => data.employees
      .find((nome) => nome.firstName === pessoa || nome.lastName === pessoa))[0];
  if (!func) return {};
  return func;
}

module.exports = getEmployeeByName;
