let userinfo = document.querySelector("#user-info");
let links = document.querySelector("#links");
let user = document.querySelector("#user");
let eqbtn = document.querySelector("#logout");

let username = localStorage.getItem("username");
if (username) {
    links.remove(); // remove ul this
    userinfo.style.display = "flex";
    user.innerHTML = username;
}

eqbtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    setTimeout(() => {
        window.location = "register.html";
    }, 1500);
});