function person(fname,lname,dept,ag){
    this.firstName=fname;
    this.lastName=lname;
    this.department=dept;
    this.age=ag;

    //adding properties to constructor function
    this.nationality="oromiyaa";

    //adding method to constructor
    this.name=function(){
        return this.firstName+" "+this.lastName;
    }
}
let mymother=new person('Ilfu','dadhi','SE','50');
let myfather=new person('ifa','Negawo','SE','60');

//adding properties to object to 
mymother.language='oromic';

//adding method to objects
myfather.name=function(){
    return this.firstName+" "+this.lastName
}
console.log(mymother.language)
console.log(myfather.name())