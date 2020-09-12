let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 },
];

let getAge = (pet) => {return new Date().getFullYear() - pet.bornOn};


var petsWithAge = [];
pets.forEach(pet=>{
  age = getAge(pet);
  petsWithAge.push(pet);
});
console.log(petsWithAge);


let dogs = [];
dogs = pets.filter((t) => t.type === "dog");
console.log(dogs);


let jasper;
jasper = pets.find(n => n.name === "Jasper");
console.log(`Jasper is ${jasper.age} years old`);
