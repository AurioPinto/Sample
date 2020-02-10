const companies = [
  { name: "company one", category: "Finamce", start: 1982, end: 2003 },
  { name: "company two", category: "Finamce", start: 1982, end: 2003 },
  { name: "company three", category: "Finamce", start: 1982, end: 2003 },
  { name: "company four", category: "Finamce", start: 1982, end: 2003 },
  { name: "company five", category: "Finamce", start: 1982, end: 2003 },
  { name: "company six", category: "Finamce", start: 1982, end: 2003 },
  { name: "company seven", category: "Finamce", start: 1982, end: 2003 },
  { name: "company eight", category: "Finamce", start: 1982, end: 2003 },
  { name: "company nine", category: "Finamce", start: 1982, end: 2003 },
  { name: "company ten", category: "Finamce", start: 1982, end: 2003 }
];

const age = [
  33,
  23,
  12,
  14,
  25,
  19,
  18,
  15,
  17,
  11,
  10,
  9,
  8,
  64,
  16,
  45,
  13,
  44,
  54,
  45
];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }
// // for each

// companies.forEach(function(company) {
//   console.log(company.name);
// });

// filter

const canDrink = age.filter(age => age => 21);

console.log(canDrink);

// Filter retail companies

const retailcompanies = companies.filter(
  company => company.category === "Retail"
);

console.log(retailcompanies);
// const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// console.log(canDrink);

// map

//sort

//reduce
