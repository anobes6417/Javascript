function person(fname,lname,age){
    this.firstName=fname;
    this.lastName=lname;
    this.Age=age;
}
person.prototype.nationality='in the heaven';
person.prototype.name=function(){
    return this.firstName+" "+this.lastName
}
const mymom=new person('harmee','koo','50')
console.log('my mom name is:'+mymom.name()+" "+"my mom nationality is:"+mymom.nationality)