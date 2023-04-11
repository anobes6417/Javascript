var person={
    fname:'sebona',
    lname:'ifaa',
    dprt:'SE'
}
person.section=1
delete person.dprt
//Accessing an object one by one
console.log(person.fname+" "+ person.lname)

//Accesing all Element at the same time
console.log(person)

//Accessing objects by using for_in loop

let x,txt=""
for(x in person)
txt += person[x] + "";
console.log(txt)