let username=document.querySelector("#username");

let pass=document.querySelector("#pass");

let reqbtn=document.querySelector("#sign_up")

let getuser=localStorage.getItem("username")
let getpass=localStorage.getItem("pass")

reqbtn.addEventListener("click",function(event){
    event.preventDefault()
    if(username.value===""&&pass.value===""){
        alert("please fill this fields")
    }
    else{
        if(
            getuser &&
            getuser===username.value &&
            getpass &&
            getpass===pass.value

        ){
            setTimeout(()=>{
                window.location="index.html"
            } ,1500)
        }
        else{
            alert("something is wrong!!!!!!")
        }
    }
})