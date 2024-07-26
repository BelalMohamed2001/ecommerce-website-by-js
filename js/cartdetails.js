let productsdetails=JSON.parse(localStorage.getItem("products"))
let proid=localStorage.getItem("proid")
let itemdom=document.querySelector(".item-details")
let findid=productsdetails.find((item)=>item.id==proid)

itemdom.innerHTML=` <img src="${findid.imageUrl}" alt="">
                    <h2>${findid.title}</h2>
                    <p>${findid.desc}</p>
                    <span>${findid.size}</span>
                      <br>
                    <span>Quantity:${findid.qta}</span>
                    <button class="edit" onclick='editpro(${findid.id})'>EDIT</button>
                    
                    `

function editpro(id){
    localStorage.setItem("editpro",id)
    window.location="editproduct.html"

}