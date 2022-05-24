import data from "./data";

export const getNames = () => {
  const nameMapping = data.map((personName) => personName.name);
  return nameMapping;
};

export const ageFiltering = () => {
  const dataFiltered = data.filter((person) => {

    const year = person.birthday.split("-")[2];

    return parseInt(year) < 1990;
  });
  
  return dataFiltered;
};
