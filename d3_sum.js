// D3 Aggregate Function Demonstration.... Sum()

const b = [20, 10, 20]
console.log(sum(b))


const a = [{name: 'waqas', age: 20}, {name: 'ali', age: 20}, {name: 'safdar', age: 10}]
console.log(sum(a, d => d.age));


//--------------------------------------
const country = [
      { id: 0, Department: "Civil", Value: "40", Title:"Sustainability", ComID: "45", organisation: { City: "New York", ComID: 45, Country: "USA" } },
      { id: 1, Department: "Energy", Value: "80", Title: "Wind Energy", ComID: "62", organisation: { City: "Paris" , ComID: 62, Country: "France" } },
      { id: 2, Department: "Medical", Value: "6", Title: "Neuroscience", ComID: "21", organisation: { City: "Berlin", ComID: 21, Country: "Germany" } },
      { id: 3, Department: "Computer", Value: "10", Title: "Security", ComID: "67", organisation: { City: "Amsterdam", ComID: 67, Country: "Holland" } }
];

const ff = d => {
    const org = d.organisation;
    return org.ComID;
}
   
console.log(sum(country, ff));
//------------------------------------------
