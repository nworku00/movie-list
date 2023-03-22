import prompt from "@cloud-technology/cli-prompt";
import Movie from "./movies.js";
import User from "./user.js";

let one = new User('nati')
let angry = new Movie('12 Angry Men','Sidney Lumet')
let air = new Movie('Con Air', 'Simon West')

one.addMovie(angry, air)
one.watch(angry)
console.log(one)

// ignore below, failed functionality

// let person = await prompt("enter username: ");

// if (person === "nati") {
//     let one = new User(person);
//     let control = "";
//     while (control !== "quit") {
//         control = await prompt(`hi ${person} please enter show list, add movie, delete movie, quit: `);
//         if (control === "show list") {
//             console.log(one.movies)
//             // let mov = await prompt('what movie to watch?: ')
//             // watch(mov)
//         } else if (control === "add movie") {
//             let mov = new Movie(await prompt("enter movie title: "), await prompt('enter director: '), await prompt('have you watched it? y/n '))
//             one.addMovie(mov)
//         } else if (control === 'delete movie') {
//             let mov = await prompt('what movie?:')
//             one.deleteMovie(mov)
//         }
//     }
// } else {
//     console.log(`${person} not found`)
// }
//  } else if (person === "rodney") {
//     let two = new User(person);
//     let control = "";
//     while (control !== "quit") {
//         control = await prompt(`hi ${person} please enter show list, add movie, remove movie, or quit: `);
//     }
// } else {
//     console.log("user not found");
// }
