{
    // 
// generic constraint with keyof operator

type Vehicle = {
    bike: string;
    car: string;
    motorcycle: string;
}

type VehicleKeys = keyof Vehicle;

const vehicle: Vehicle = {
    bike: "bike",
    car: "car",
    motorcycle: "motorcycle",
};

console.log(vehicle.bike);


const getPropertyValue =<X , Y extends keyof X>(obj: X, Key: Y) => {
    return obj[Key];

}




const user = {
    name: "John",
    age: 30,
    email: "john@gmail.com",
};

user.name = "John";




const  result = getPropertyValue(user, "name");








    
    // 
}