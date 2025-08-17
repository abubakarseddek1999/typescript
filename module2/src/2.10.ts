{
    // 

    // mapped types
    const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

    // const arrOfStings: string[] = ["a", "b", "c", "d", "e"];
    const arrOfStrings: string[] = arrOfNumbers.map((num) => num.toString());

    console.log(arrOfStrings);


    type AreaNumber = {
        width: number;
        height: number;
    };

    // type AreaString = { 

    //     [key in keyof AreaNumber]: string;
    // }
    type AreaString<T> = {

        [key in keyof T]: T[key];
    }
    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 100,
    }

    // 

}