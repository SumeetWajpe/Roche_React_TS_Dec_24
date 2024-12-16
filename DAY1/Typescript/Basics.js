// var str = "Hello Typescript !"; // Type Inference
// var str: string; // Type annotation
// str = "Hello TS !";
// str = 10;
// console.log(str);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var techs = ["React", "Redux", "Angular"];
// let firsttech: string = techs[0];
// let secondtech: string = techs[1];
// OR
var firsttech = techs[0], thirdtech = techs[2], _a = techs[3], fourthtech = _a === void 0 ? "CSS3" : _a;
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
var _b = GetPlayer(), fname = _b.fname, sport = _b.sport;
var company = {
    name: "Roche",
    location: "Baner",
    //   xyz: 123,
    getDetails: function (n) { return n; },
};
// Class
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 100; }
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        // console.log(
        //   "The car " + this.name + " is running @ " + this.speed + " kmph !",
        // );
        // ES 6 Template literals
        return "The car ".concat(this.name, " is running @ ").concat(this.speed, " kmph !");
    };
    return Car;
}());
var JamesBondCar = /** @class */ (function (_super) {
    __extends(JamesBondCar, _super);
    function JamesBondCar(name, speed, canFly) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.speed = speed;
        _this.canFly = canFly;
        return _this;
    }
    JamesBondCar.prototype.accelerate = function () {
        return _super.prototype.accelerate.call(this) + "Can it fly ? : " + this.canFly;
    };
    return JamesBondCar;
}(Car));
var jbc = new JamesBondCar("Aston Martin", 300, true);
console.log(jbc.accelerate());
// let carObj = new Car();
// carObj.accelerate();
// let multilineStr = `First Line
// Second Line !
// Last Line !
// `;
// console.log(multilineStr);
