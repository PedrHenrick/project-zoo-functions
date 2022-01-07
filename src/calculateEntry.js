const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants = {}) {
  // seu código aqui
  const retorno1 = Object.values(entrants);
  const zero = retorno1 === [];
  if (zero) return 0;
  let childs = 0;
  let adults = 0;
  let seniors = 0;
  retorno1.forEach((entrant) => {
    if (entrant.age < 18) childs += 1;
    else if (entrant.age >= 18 && entrant.age < 50) adults += 1;
    else seniors += 1;
  });
  return { child: childs, adult: adults, senior: seniors };
}

function calculateEntry(entrants) {
  // seu código aqui
  const retorno = countEntrants(entrants);
  const chaves = Object.keys(prices);
  return chaves.reduce((acc, chave) => acc + prices[chave] * retorno[chave], 0);
}

module.exports = { calculateEntry, countEntrants };
