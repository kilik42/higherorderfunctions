const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//foreach
companies.forEach(function(company){
  console.log(company.name);
});

//filter age if greater than 21
    //first with for loop
    let canDrink = [];
    for (let i = 0; i< ages.length; i++){
      if (ages[i] >= 21){
        canDrink.push(ages[i]);
      }
    }
    console.log(canDrink);

//now with filter
    const canDrink = ages.filter(function(age){
      if(age > = 21){
        return true;
      }
    });

      console.log(canDrink);

//now with arrow filter
      const canDrink = ages.filter(age => age >= 21);
      console.log(canDrink);

//filter retail companies
      const retailCompanies = companies.filter(function(company){
        if(company.category == 'Retail'){
          return true;
        }
      });

      console.log(retailCompanies);

//or
      const retailCompanies = companies.filter(company => company.category =='Retail');
      console.log(retailCompanies);

//Filter companies that were in the 80s
      const companies80s = companies.filter(company => (company.start>=1980 && company.start <1990));
      console.log(companies80s);

//filter companies that lasted ten years or more
 //if the diff of companiesstart and companiesend is greater than or 10, then return the result.
      const lastedTen = companies.filter(company => (companies.end - company.start >= 10 ));

      console.log(lastedTen);

//map
//create array of company names
      const companyNames = companies.map(function(company){
        return company.name;
      });

      console.log(companyNames);

//test
    const testMap = companies.map(function(company){
      return `${company.name} [${company.start} - ${company.end}]`
    })
    console.log(testMap);

//map get square root of ages
const agesSquare = ages.map(age => Math.sqrt(age));
const agestimes= ages.map(age => age *2);

console.log(agesSquare);
console.log(agestime);

//sort
      const sortedCompanies = compaines.sort(function(c1, c2){
        if(c1.start > c2.start){
          return 1;
        }else {
          return -1;
        }
      });
        //or
      //const sortedCompanies = companies.sort(company=> companies.start);
      const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1: -1));


      console.log(sortedCompanies);


//reduce
    //old way
    // let ageSum = 0;
    //
    // for (let i = 0; i <ages.length; i++){
    //   agesSum += ages[i];
    // }
    const ageSum = ages.reduce(function(total, age){
      return total + age;
    }, 0);
    // or
    const ageSum = ages.reduce((total, age) => total + age, 0);
    console.log(ageSum);

    //get total years for all companies

    const totalYears = companies.reduce(function(total, company){
      return total + (company.end - company.start);
    },0);

    const totalYears = companies.reduce((total, company )=> total + (company.end -company.start),0);

    console.log(totalYears);
