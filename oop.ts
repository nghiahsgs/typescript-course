class Person{
    constructor(protected name:string,protected age:number){
    }

    public hello():void{
        console.log(`Hello name: ${this.name} and age: ${this.age}`);
    }
    
}

// let person1 =  new Person("nghiahsgs",20)
// person1.hello()

// let person2 =  new Person("nghiahsgs2",23)
// person2.hello()



// class Student extends Person{
//     constructor(public name:string,public age:number){
//         supper(name,age);
//         // this.name = name
//         // this.age = age
//     }

//     // supper()
// }


class Student extends Person {  
    constructor(name: string, age: number,private msv:string) {  
        super(name,age);
    } 
    override hello(){
        console.log(`Hello name: ${this.name} and age: ${this.age} and msv ${this.msv}`);
    }
}

let student1 =  new Student("nghiahsgs",20,'15001666')
student1.hello()

let student2 =  new Student("nghiahsgs2",23,'15001667')
student2.hello()
export default {}