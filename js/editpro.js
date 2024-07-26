// get from local storge
let get_user=localStorage.getItem("username")//not object 
let get_email=localStorage.getItem("email")//not object 

//variable
let user2=document.querySelector("#name")
let email2=document.querySelector("#email")
let editform=document.getElementById("editform")

//setting
user2.value=get_user
email2.value=get_email

//function
editform.addEventListener("submit",editform1)

function editform1(e){
    e.preventDefault()
    localStorage.setItem("username",user2.value)
    localStorage.setItem("email",email2.value)

    setTimeout(()=>{
        window.location="profile.html"
    },400)
}
