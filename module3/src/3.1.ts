{
    // 
    // OOP - class
    class Animal {
      public  name: string;
        species: string;
        sound: string;


        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {   
            console.log(this.sound);
        }
    }
    

    const dog = new Animal("Dog", "Canis familiaris", "Woof");
    const cat = new Animal("Cat", "Felis catus", "Meow");
    cat.makeSound();
    dog.makeSound();

}







// 