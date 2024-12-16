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

var techs: string[] = ["React", "Redux", "Angular"];
let otherTechs: string[] = ["C#", "Kubenetes", "GraphQL"];
let allTechs: string[] = [...techs, ...otherTechs, "HTML5"];
console.log(allTechs);
