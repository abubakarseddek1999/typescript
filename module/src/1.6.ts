// learning function

// Normal function
// Arrow function

function add (num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

const addarrow = (num1: number, num2: number): number => {
  return num1 + num2;
}
addarrow(1, 2);

// Object -->Function -->method
const poorUser ={
    firstName: 'Abubakar',
    balance: 0,
    addBalance (balance: number) {
    return ` his balance is ${this.balance + balance}`;
    }
}

const arr:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.map(function (item) {
  return item * item;
});