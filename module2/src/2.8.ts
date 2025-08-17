{
    // 
    // Promise
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data: string = "Hello World";
            if (data) {
                resolve(data);
            } else {
                reject("failed to load data");
            }
        });
    }




const showData = async () => {
    const data = await createPromise();
}











    // 


}