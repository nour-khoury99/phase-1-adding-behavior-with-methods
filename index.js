// Your code here
class Cat{
    constructor(name,sex){
      this.name=name;
      this.sex=sex;
         
    }
    speak(){
        console.log(`${this.name} syas meow!`)
    }
}

class Dog{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        console.log(`${this.name} syas woof!`)
    }
}

class Bird{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;

    }
    speak(){
        if(this.sex == 'male'){
            console.log(`it's me ${this.name} , the parrot`)
        }else {
            console.log(`${this.name} says squawk!`);
        }
    }
}

let cat = new Cat('kouki','male');
cat.speak();

let dog = new Dog('zeldiya','female')
cat.speak()

let bird = new Bird('kooko','male');
bird.speak()