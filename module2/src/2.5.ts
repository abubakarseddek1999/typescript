{
    // 

    // function wit generics

    const createArray = (param: string): string[] => {
        return [param];
    }
    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray("Hello");
    const res2 = createArrayWithGenerics<boolean>(true);






    // for tuples

    const createTuple = <T extends string, U extends number>(param1: T, param2: U): [T, U] => {
        return [param1, param2];
    }

    const res3 = createTuple("Hello", 1);








    // 
}