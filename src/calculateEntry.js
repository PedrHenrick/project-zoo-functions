const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function naoEZero(entrants) {
  let childs = 0;
  let adults = 0;
  let seniors = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) childs += 1;
    else if (entrant.age >= 18 && entrant.age < 50) adults += 1;
    else seniors += 1;
  });
  return { child: childs, adult: adults, senior: seniors };
}

function countEntrants(entrants = {}) {
  // seu código aqui
  const retorno1 = Object.values(entrants);
  const zero = retorno1 === [];
  let blablabla;
  if (zero) blablabla = 0;
  else blablabla = naoEZero(retorno1);
  return blablabla;
}

function calculateEntry(entrants) {
  // seu código aqui
  const retorno = countEntrants(entrants);
  const chaves = Object.keys(prices);
  return chaves.reduce((acc, chave) => acc + prices[chave] * retorno[chave], 0);
}

module.exports = { calculateEntry, countEntrants };
