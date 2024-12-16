// var str = "Hello Typescript !"; // Type Inference
// var str: string; // Type annotation
// str = "Hello TS !";
// str = 10;
// console.log(str);

// var b: boolean;
// var n: number;
// var a: any;
// var obj = { name: "Roche" };
// var arr: string[] = ["React", "Redux", "Angular"];
// // Generics
// var companies: string[] = new Array<string>();
// companies[0] = 100;

// Creating variables

// let -> ES6
// var x: number = 10;
// if (true) {
//   let x: number = 1000; // block scoping
//   // after 10 lines of code
//   //   let x: number = 100000;
//   console.log(x);
// }

// let s = "Hello !";
// const y: number = 30; // block scoped
// y = 20;
// const player = { name: "Alcaraz" };
// // player.xyz = "XYZ";
// player.name = "Carlos Alcaraz";
// console.log(player.name);

// Operators
// - Spread Operator - Object & Array

// let person = { name: "Alcaraz", age: 20 };

// let player = { ...person, sport: "Tennis", isWimbledonChampion: true };

// console.log(player);

/// with Arrays

// var techs: string[] = ["React", "Redux", "Angular"];
// let otherTechs: string[] = ["C#", "Kubenetes", "GraphQL"];
// let allTechs: string[] = [...techs, ...otherTechs, "HTML5"];
// console.log(allTechs);

// Destructuring
// With Array
var techs: string[] = ["React", "Redux", "Angular"];
// let firsttech: string = techs[0];
// let secondtech: string = techs[1];

// OR
let [firsttech, , thirdtech, fourthtech = "CSS3"] = techs;
console.log(fourthtech);

// With Objects
// let person = {
//   fname: "Carloz",
//   lname: "Alcaraz",
//   sport: "Tennis",
//   age: 20,
//   stats: {
//     ranking: 3,
//     isWimbledonChampion: undefined,
//   },
// };

// // let fname: string = person.fname;
// // let sport = person.sport;

// let {
//   fname,
//   age,
//   sport,
//   stats: { ranking, isWimbledonChampion: RANK = false },
// } = person;

// console.log(ranking, RANK);

// let player = {
//   fname: "Carloz",
//   lname: "Alcaraz",
//   sport: "Tennis",
//   age: 20,
//   stats: {
//     ranking: 3,
//     isWimbledonChampion: undefined,
//   },
// };

// function PrintPlayer({ fname, sport }) {
//   //   p.fname = "XYZ";
//   console.log(`The player ${fname} plays ${sport}`);
// }

// PrintPlayer(player);

function GetPlayer() {
  return {
    fname: "Carloz",
    lname: "Alcaraz",
    sport: "Tennis",
    age: 20,
    stats: {
      ranking: 3,
      isWimbledonChampion: undefined,
    },
  };
}

// let player = GetPlayer();
let { fname, sport } = GetPlayer();

// Object Oriented

// INterface
// interface ICompany {
//   name: string;
//   location: string;
//   city: string;
// }
// var company: ICompany = {
//   name: "Roche",
//   location: "Baner",
//   city: "Pune",
//   xyz: 123,
// };

type Company = {
  name: string;
  location: string;
  city?: string;
  getDetails?: (n: number) => number;
};
var company: Company = {
  name: "Roche",
  location: "Baner",
  //   xyz: 123,
  getDetails: n => n,
};

// Class

class Car {
  name: string;
  speed: number;
  constructor(name: string = "BMW", speed: number = 200) {
    this.name = name;
    this.speed = speed;
  }
}

let carObj = new Car();
// carObj.name = "Ertiga";
// carObj.speed = 100;
