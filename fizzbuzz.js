const output=fizzbuzz(20)
console.log(output)
function fizzbuzz(input)
{ 
    if((input%5==0) && (input%3==0))
        return 'fizzbuzz'
    if(input%3==0)
        return 'fizz'
    if(input%5==0)
        return 'buzz'
   
    if(typeof input!==number)
        return 'Is Not a Number'
    return input
}
