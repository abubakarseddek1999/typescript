{
// 
// type alias
type Student ={
    name: string,
    age: number,
    gender: string,
    hobby: string,
}

const student1:Student = {
    name: 'Abubakar',
    age: 25,
    gender: 'male',
    hobby: 'coding',
};

const student2:Student = {
    name: 'Abdullah',
    age: 26,
    gender: 'male',
    hobby: 'coding',
};

type Add =(num1:number,num2:number)=>number;
const add:Add =(num1,num2)=> num1+num2;


// 

}