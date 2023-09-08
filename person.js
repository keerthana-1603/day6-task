class Person{
    constructor(name,age,gender,qualification,location,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.qualification=qualification;
    this.location=location;
    this.phone=phone;

}
persondata(){
    console.log(`Name: ${this.firstName}
Age: ${this.age}
Gender: ${this.gender}
Qualification: ${this.qualification}
Location: ${this.location}
Phone No: ${this.phone}
    `)
}
};
let result=new Person("Viji",21,"Female","Bsc","Madurai",1234567891);
result.persondata();