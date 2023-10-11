//import {Person} from "./utility.js";

class Person{

  costructor(name,age){
      this.name = name;
      this.age = age;
  }

  get Name(){
      return this.name;
  }

  get Age(){
      return this.age;
  }

  set Name(name){
      this.name = name;
  }

  set Age(age){
      this.age = age;
  }
}

let name;
let age;

let me = new Person;

function logName(){
  me.name.getElementById("name");
  me.age = document.getElementById("age");
  alert(me.getName(),me.getAge());
}
// const ctx = document.getElementById('myChart');

// var chart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: 'Percent of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });


