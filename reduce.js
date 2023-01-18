// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  // here's how to do it without .reduce:
  let sneaks = [];
  //   for (let brand of brands) {
  //     sneaks = [...sneaks, ...brand.shoes];
  //     console.log('sneaks', sneaks);
  //   }
  //   return sneaks;
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);

  //   brands.reduce((acc, brand) => {
  //     (...acc.push(brand.shoes),[]));
  //   return acc; // not working yet...
  // here's with .reduce:
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {};
