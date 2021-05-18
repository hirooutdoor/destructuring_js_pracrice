// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";

//Destructuring Arrays
const [cat, dog] = animals;
// console.log(dog);

// console.log(useAnimals(cat));

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//Destructuring Objects
// const { foodRequirements: {food, water}, name:catName , sound:catSound } = cat;
// console.log(water);

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
