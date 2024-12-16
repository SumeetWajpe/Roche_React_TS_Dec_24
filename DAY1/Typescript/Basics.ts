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

// type Company = {
//   name: string;
//   location: string;
//   city?: string;
//   getDetails?: (n: number) => number;
// };
// var company: Company = {
//   name: "Roche",
//   location: "Baner",
//   //   xyz: 123,
//   getDetails: n => n,
// };

// Class

class Car {
  private id: number;
  public name: string;
  public speed: number;
  constructor(name: string = "BMW", speed: number = 100) {
    this.name = name;
    this.speed = speed;
  }

  accelerate(): string {
    // console.log(
    //   "The car " + this.name + " is running @ " + this.speed + " kmph !",
    // );
    // ES 6 Template literals
    return `The car ${this.name} is running @ ${this.speed} kmph !`;
  }
}

class JamesBondCar extends Car {
  canFly: boolean;
  constructor(name: string, speed: number, canFly: boolean) {
    super(name, speed);
    this.canFly = canFly;
  }

  accelerate(): string {
    return super.accelerate() + "Can it fly ? : " + this.canFly;
  }
}

var jbc = new JamesBondCar("Aston Martin", 300, true);
console.log(jbc.accelerate());

// let carObj = new Car();
// carObj.accelerate();

// let multilineStr = `First Line
// Second Line !
// Last Line !
// `;
// console.log(multilineStr);

// interface ICompanyType {
//   isProprietorship: boolean;
// }

// interface ICompany {
//   name: string;
//   location: string;
//   city: string;
// }

// class CCompany implements ICompany, ICompanyType {
//   name: string;
//   location: string;
//   city: string;
//   isProprietorship: boolean;
// }

// Enhanced Class Syntax

class EnhancedCar {
  constructor(
    private id: number = 1,
    public name: string = "BMW",
    public speed: number = 200,
  ) {}
}

var ec = new EnhancedCar();

// Generics

function Swap<T>(x: T, y: T) {
  let temp: T;
  temp = x;
  x = y;
  y = temp;
}

Swap<number>(20, 30);
