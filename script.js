let item=document.querySelector("input");
let add=document.querySelector(".button");
let display=document.querySelector(".dis");
let arr=[];
window.onload=()=>{
arr=JSON.parse(localStorage.getItem('arr'))||[];
arr.forEach(element =>(addlist(element))); 
}
add.addEventListener("click",()=>{
    arr.push(item.value);
    addlist(item.value);
    item.value='';
});

function addlist(val){
   let para=document.createElement('p')
   para.innerText=val;
   display.appendChild(para);
    localStorage.setItem('arr',JSON.stringify(arr));
   para.addEventListener("click",()=>{
        para.style.textDecoration='line-through';
        
        remove(val)
     
   })
   para.addEventListener("dblclick",()=>{
    para.innerHTML='';
    display.removeChild(para);
    localStorage.setItem('arr',JSON.stringify(arr));
   })
 }
function remove(val){
    let index=arr.indexOf(val);
    if(index >-1){
        arr.splice(index,1);    
        }
        localStorage.setItem('arr',JSON.stringify(arr));
 }