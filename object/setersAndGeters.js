//Getters
var person={
    fname:'sebona',
    lname:'ifa',
    dept:'se',
    language:"oromic",
    get lang(){
        return this.language.toUpperCase()
    }
}
console.log(person.lang)

//Setters
//Getters
var person={
    fname:'sebona',
    lname:'ifa',
    dept:'se',
    language:"",
    set lang(lang){
        return this.language=lang.toUpperCase()
    }
}
person.lang='oromic'
console.log(person.language)