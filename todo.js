let form = document.getElementById("form");
let i = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});
let formValidation=()=>{
    if(input.value ==""){
        msg.innerHTML="Please enter something";
        console.log("failure in entered text")
    }
    else{
        msg.style.display = "";
        msg.innerHTML="<span style='color: green;'>Sucessfully added</span>";
        console.log("Sucess")
        acceptData();
    }
}
let data = {};
let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data)
    posts.innerHTML += `<div><div class="check"><input type="checkbox" id="checkb"><pre>    </pre>
        <p>${data.text}</p>
    </div>
    <span class="options">
    <i class="fas fa-edit" onclick="edit_function(this)"></i>
    <i class="fas fa-trash-alt" onclick="delete_function(this)"></i>
    </span>
    </div>`;
    input.value = "";
}
var delete_function =(e) =>{
    e.parentElement.parentElement.remove();
}

let edit_function =(e)=>
{
    i.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
