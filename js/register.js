let username=document.querySelector("#username");
let email=document.querySelector("#email");
let pass=document.querySelector("#pass");

let reqbtn=document.querySelector("#sign_up")

reqbtn.addEventListener("click", function(event) {
    event.preventDefault()
    if (username.value === "" || email.value === "" || pass.value === "") {
        alert("please fill in all fields");
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("pass", pass.value);

        setTimeout(() => {
            window.location = "login.html";
        }, 1500);
    }
});