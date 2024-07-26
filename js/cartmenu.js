
let badg = document.querySelector(".badge");
let bom = document.querySelector(".title div");
let bom1 = document.querySelector(".title");
let shop = document.querySelector(".shop");

shop.addEventListener("click", opencart)


let additem= localStorage.getItem("productcart")?JSON.parse(localStorage.getItem("productcart")):[];
if(additem){
    additem.map((item)=>{
        bom.innerHTML += `<p>${item.title}</p>`;

    })

    badg.style.display = "block";
    badg.innerHTML = additem.length;
}



function opencart() {
    if (bom.innerHTML !== "") {
        if (bom1.style.display === "block") {
            bom1.style.display = "none";
        } else {
            bom1.style.display = "block";
        }
    }
}
