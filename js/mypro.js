let products = JSON.parse(localStorage.getItem("products"))||productsDB
let mypro=products.filter((item)=>item.isMe==="Y")
let nopro=document.querySelector(".nopro");
let item = localStorage.getItem("productcart");
let dom = document.querySelector(".products");


function addmypro() {//map arrays only
    if(mypro){
        console.log(mypro)
    let pro = mypro.map((item) => {//map arrays only
    
        
        return `<div class="product-item" style="border:${item.isMe==="Y" ? "5px solid tomato":""}">
                    <img src="${item.imageUrl}" class="product-item-img" alt="">
                    <div class="product-des">
                        <h2>${item.title}</h2>
                        <a class="bba" onclick="savedata(${item.id})">details</a>
                        <p > ${item.desc}</p>
                        <span>${item.size}</span>
                        <button class="edit" onclick='editpro(${item.id})'>EDIT</button>
                        
                        <button class="edit" onclick='delpro(${item.id})'>DELETE</button>
                    </div>
                    
                    
                </div>`;
    }).join(''); // Join the array into a string to avoid commas between elements of arry of map function return  array and comma in innerhtml 

    dom.innerHTML = pro;
}
else{
    nopro.innerHTML="no products !!!!!"
}
}
addmypro()

function editpro(id){
    localStorage.setItem("editpro",id)
    window.location="editproduct.html"

}

function delpro(id){
    let products = JSON.parse(localStorage.getItem("products"))||productsDB
    let mypro=products.filter((item)=>item.isMe==="Y")
    let filtered=mypro.filter((item)=>item.id !=id)

    let clickitem=mypro.find((i)=>i.id ==id)
    products=products.filter((i)=>i.id !=clickitem.id)
    console.log(products)
    localStorage.setItem("products",JSON.stringify(products))
    console.log("p",mypro)
    if(mypro){
        
    let pro = filtered.map((item) => {//map arrays only
    
        
        return `<div class="product-item" style="border:${item.isMe==="Y" ? "5px solid tomato":""}">
                    <img src="${item.imageUrl}" class="product-item-img" alt="">
                    <div class="product-des">
                        <h2>${item.title}</h2>
                        <a class="bba" onclick="savedata(${item.id})">details</a>
                        <p > ${item.desc}</p>
                        <span>${item.size}</span>
                        <button class="edit" onclick='editpro(${item.id})'>EDIT</button>
                        
                        <button class="edit" onclick='delpro(${item.id})'>DELETE</button>
                    </div>
                    
                    
                </div>`;
    }).join(''); // Join the array into a string to avoid commas between elements of arry of map function return  array and comma in innerhtml 

    dom.innerHTML = pro;
}
else{
    nopro.innerHTML="no products !!!!!"
}

    
}
