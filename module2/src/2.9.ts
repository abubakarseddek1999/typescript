{
    // 
    // conditional types

    type a1 = string | number;
    type a2 = string | number | boolean;

    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : a2 extends undefined ? undefined : any;






type sheikh = {
    bike: string;
    car: string;
    motorcycle: string;
}

type checkVehicle<T> = T extends keyof sheikh ? true : false;
type HasPlane = checkVehicle< "plane" >; // false








    // 
}