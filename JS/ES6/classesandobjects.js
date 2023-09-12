class person{
    constructor(name, age, gender){
        this.name= name
        this.age= age
        this.gender =gender

    }
    walk(){
        console.log("Walking")
    }
    run(){
        console.log("Running")
    }
    eat(){
        console.log("Eating")
    }
}
let person1 = new person( 'dp', 23 , 'male')
let person2 = new person('Ram', 40, 'male')

console.log(person1.name)
console.log(person2.name)
