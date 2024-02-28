// EXAMPLE 1 - Disable type checking for an entire File in TypeScript

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

console.log('no errors' / 0);
console.log('no errors' / 0);

// ---------------------------------------------------

// // EXAMPLE 2 - Disable type checking for a Line in TypeScript

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// console.log('no error' / 0);

// ---------------------------------------------------

// // EXAMPLE 3 - Disable type checking for JavaScript files in TypeScript

// // 👇️ ts-nocheck disables type checking for the entire file
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-nocheck

// // 👇️ ts-ignore ignores any ts errors on the next line
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// function multiply(a, b) {
//   return a * b;
// }
