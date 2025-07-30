{
    // 
// ternary operator || optional chaining || nullish coalescing operator


const age = 25;
if (age >= 18) {
  console.log('You are an adult');
} else {
  console.log('You are a minor');
}



const isAdult = age >= 18 ? 'You are an adult' : 'You are a minor';
console.log(isAdult);


// nullish coalescing operator
const name = null;
const fullName = name ?? 'Abubakar Salam';
console.log(fullName);




    // 
}