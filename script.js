let data=JSON.parse(localStorage.getItem("key"));
if (data) {
    for (const d of data) {
        console.log(d);
        taskList(d);
    }
}else{
    data=[];
}
let btn=document.getElementById("btn");
console.log(btn);
btn.addEventListener("click",function(){
    let input=document.querySelector("#input");
    console.log(input);
    let task=input.value;
    console.log(task);
    if (task!=="") {
        taskList(task);
        data.push(task);
        let dataText=JSON.stringify(data);
        localStorage.setItem("key",dataText);
    }
})
btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor="orange";
})
btn.addEventListener("mouseleave",function(){
    btn.style.backgroundColor="transparent";
})
function taskList(task){
    let list=document.createElement("li");
    list.classList.add("list");
    list.textContent=task;
    let list_wrap=document.querySelector(".todo-list");
    console.log(list_wrap);
    list_wrap.appendChild(list);
    input.value="";
    let deleteBtn=document.createElement("div");
    console.log(deleteBtn);
    deleteBtn.textContent="fuckit";
    deleteBtn.classList.add("delete");
    list.appendChild(deleteBtn);
    deleteBtn.addEventListener("dblclick",function(){
        console.log(this.parentElement);
        this.parentElement.remove();
        let target=data.indexOf(task);
        data.splice(target,1);
        let dataText=JSON.stringify(data);
        localStorage.setItem("key",dataText);
    })
    deleteBtn.addEventListener("click",function(){
        deleteBtn.style.cursor="wait";
        list.style.textDecoration="line-through";
    })
    deleteBtn.addEventListener("mouseover",function(){
        deleteBtn.classList.add("neg_btn");
        // console.log(negBtn);
    })
    deleteBtn.addEventListener("mouseleave",function(){
        deleteBtn.classList.remove("neg_btn");
    })
}
