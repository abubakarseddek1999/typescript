{


//   spread operator
// rest oparator
// destructuring






// learn spread operator

const bros1 = ['a', 'b', 'c'];
const bros2 = ['d', 'e', 'f'];

bros1.push(...bros2);




const mentor1 = {
  name: 'Abubakar',
  age: 25,
  gender: 'male',
  hobby: 'coding',
};

const mentor2 = {
  name: 'Abdullah',
  age: 26,
  gender: 'male',
  hobby: 'coding',
};
const allmentors = {
  ...mentor1,
  ...mentor2,
};

console.log(allmentors);





const greetFriends = (...friends: string[]) => {
//   console.log(friends);
friends.forEach((friend) => {
  console.log(`Hello ${friend}`);
}); 
};

greetFriends('Abubakar', 'Abdullah', 'Muhammad', 'Ahmed');





}