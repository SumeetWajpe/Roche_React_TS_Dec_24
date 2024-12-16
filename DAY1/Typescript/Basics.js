// var str = "Hello Typescript !"; // Type Inference
// var str: string; // Type annotation
// str = "Hello TS !";
// str = 10;
// console.log(str);
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var techs = ["React", "Redux", "Angular"];
var otherTechs = ["C#", "Kubenetes", "GraphQL"];
var allTechs = __spreadArray(__spreadArray(__spreadArray([], techs, true), otherTechs, true), ["HTML5"], false);
console.log(allTechs);
