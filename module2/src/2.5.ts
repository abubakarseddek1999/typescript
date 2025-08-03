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

















    // 
}