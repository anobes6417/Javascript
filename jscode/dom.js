const userlist=document.querySelector('.name');
const listInput=document.querySelector('.list');
const addListBtn=document.querySelector('.buttonClick');

addListBtn.addEventListener('click', function(){
const newLi=document.querySelector("Li");
const liContent=document.createTextNode(listInput.value);
newLi.appendChild(liContent);
userlist.appendChild(newLi);
});






/*const userlist=document.querySelector('.name li');

for(user of userlist){
user.addEventListener('click', function(){
    this.style.color='red';
});
}
/*const text=document.querySelector(".title");
const changeColor=document.querySelector(".changeColor");
changeColor.addEventListener('click', function(){
    text.classList.toggle('change');
});*/