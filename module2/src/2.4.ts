{
    //
    // interface generics


interface Developer<T> {
    name: string;
    computer:{
        brand: string,
        model: string,
        year: number,
    }
    smartWatch: T;
    }


const developer: Developer< string> = {
    name: 'Abubakar',
    computer: {
        brand: 'Apple',
        model: 'iPhone 13',
        year: 2022,
    },
    smartWatch: 'Apple Watch Series 8',
};










    // 
}