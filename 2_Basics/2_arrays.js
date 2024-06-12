const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // 'Push' method here will push dc_heroes as a whole object inside marvel_heroes instead of individual elements of dc_heroes


// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// Instead of using concat, we can use spread operator which is used in modern javascript syntax

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


// Suppose we have nested array and want all the elemnts of nested arrays into single array,
// we use .flat() Method.
const usable_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = usable_arr.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // Returns boolean value whether the given value is array or not
console.log(Array.from("Hitesh")) // Converts given data into array if possible.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//Array.of() method makes array using different variable values.