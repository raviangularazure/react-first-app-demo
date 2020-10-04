import React from "react";
import ReactDOM from "react-dom"; // Library that provides render() method etc - interface to the virutal DOM of React
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ES6 features in Javascript
function logNumbers() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i); // var vs let - Block scoped vs Function scoped.
}

logNumbers();

// Objects

const person = {
  name: "Ravi",
  talk() {
    console.log(this.name + " talking..."); // 'this' will always returns the calling object.
    console.log(this);
  },
  talk1() {
    setTimeout(function () {
      console.log(this); // 'this' here will return window object.
    });
  },
  talk2() {
    setTimeout(() => {
      console.log(this); // This is the same as doing var self = this outside the timeout and referring to self. Arrow functions do not rebind the 'this'
    });
  },
};

person.talk();
person["name"] = "Uma";

const talkFn = person.talk.bind(person); // bind method is used to set the value of 'this' - in this case its set to 'person' object
talkFn();

const sampleFn = (name) => name + " Mr.";

console.log(sampleFn("Ravi"));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive); // Filter function

console.log(...activeJobs); // Use of spead operator

const colors = ["red", "green", "blue"];

// map function gets each item in the array and then returns a new item, thus an array with transformed items
const items = colors.map((color) => "<li>" + color + "</li>");
console.log(items);
const items1 = colors.map((color) => `<li> + ${color} + </li>`); // Same as above line but using template literals
console.log(items1);

// Object Destructuring
const address = {
  street: "Owners Court",
  city: "Bangalore",
  country: "India",
};

const street1 = address.street;

const { street, city } = address; // This is object destructuring. We just create two consts for street and city from the object
console.log(street + " " + city);

const first = [1, 2, 3];
const second = [4, 5, 6];

const third = [...first, 9, ...second, 10]; // Spread operator
console.log(third);

const clone = [...first]; // to clone an array.

const nameObj = { name: "Ravi" };
const ageObj = { age: 37 };

const personObj = { ...nameObj, ...ageObj, location: "Bangalore" };
console.log(personObj);

// Class
class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this.name + " walking...");
  }
}

const pers = new Person("Ravi");
pers.walk();

class Teacher extends Person {
  constructor(name, degree) {
    super(name); // parent class constructor
    this.degree = degree;
  }
  teach() {
    console.log("teach...." + this.degree);
  }
}

const teachr = new Teacher("Uma", "English");

teachr.walk(); // base class method. This is why we inherit from base 'Component' class in React.
teachr.teach();

// Modules - Nothing but a file. Each file is a module that can export objects like classes, functions, interfaces, even properties

//Create a new file Person.js or Person.ts
export class PersonNew {
  // index (since its index.js) is the module (in other words ES6 or ES2015 module) in which this class is present
}

// ES2015 or ES modules the same and its just a file which has one or more exports of class / function / interface etc inside it.

// Object - Oriented Javascript

// There are 2 ways to create an object in Javascript

// 1) Factory Function
function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// 2) Constructor Function
function Circle(radius) {
  this.radius = radius; // 'this' is used to create the properties and functions in a constructor function
  this.draw = function () {
    console.log("draw");
  };
}

const anotheCircle = new Circle(1); // The new keyword create a new object {}, then sets the 'this' to this object and returns this object
anotheCircle.draw();
// The ES6 class is just a syntactic sugar to create a constructor function as above
