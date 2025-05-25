const add=document.querySelector("#add");
const input=document.querySelector("#inputfield");
const savebtn=document.querySelector("#btn");
const list=document.querySelector("#list");
add.addEventListener("click",()=>{
   
    let text=input.value.trim();
    if(text.length==0){
        alert("Please enter a task");
        return;
    }
    let li=document.createElement("li");
    li.innerHTML=text;
    list.appendChild(li);
    let deletebtn=document.createElement("button");
    deletebtn.innerHTML="Delete";
    deletebtn.classList.add("deletebtn");
    
    let editbtn=document.createElement("button");
    editbtn.innerHTML="Edit";
    editbtn.classList.add("editbtn");
    
    editbtn.addEventListener('click',()=>{
        input.value=text;
        list.removeChild(li);
    });

    deletebtn.addEventListener('click',()=>{
        list.removeChild(li);
    });
    li.appendChild(editbtn);
    li.appendChild(deletebtn);  

    input.value="";

});
