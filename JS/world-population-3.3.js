

function percentageOfWorld1(population) {
  const countryPop = (population / 7900) * 100;
  return `${countryPop}% `;
}

const countryPop1 = percentageOfWorld1(212);
console.log(countryPop1);


const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const perRussia1 =  percentageOfWorld2(190);
const perChina1 = percentageOfWorld2(1441);
const perUSA1 = percentageOfWorld2(332);
console.log(perRussia1,perChina1, perUSA1);
