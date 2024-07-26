

let dom = document.querySelector(".products");
let products=JSON.parse(localStorage.getItem("products"))





function addprod() {
    
    let pro = products.map((item) => {
        
        return `<div class="product-item" style="border:${item.isMe==="Y" ? "5px solid tomato":""}">
                    <img src="${item.imageUrl}" class="product-item-img" alt="">
                    <div class="product-des">
                        <h2>${item.title}</h2>
                        <a class="bba" onclick="savedata(${item.id})">details</a>
                        <p > ${item.desc}</p>
                         <span>${item.size}</span>
                         ${item.isMe==="Y"&&"<button class='edit' onclick='editpro("+item.id+")'>EDIT</button>"}
                    </div>

                    <div class="actions">
                        <button class="add-to-cart" id="addcart" onclick="addtocart('${item.id}')">Add to Cart</button>
                        <i class="fav fa-regular fa-heart" style="color:${item.liked==true ? "red" : ""}" onclick="addtofav('${item.id}')"></i>
                    </div>
                </div>`;
    }).join(''); // Join the array into a string to avoid commas between elements of arry of map function return  array and comma in innerhtml 

    dom.innerHTML = pro;
}

addprod();


//add ti cart
function addtocart(id) {
    if(localStorage.getItem("username")){
        products=JSON.parse(localStorage.getItem("products"))||products//file data
        
    let cart = products.find((item) => item.id == id);
    
    let item=additem.some((item)=> item.id===cart.id)//find return object //item return boolean
    if(item){
    additem=additem.map((p)=>{
        if(p.id===cart.id)p.qta+=1
        return p
    })
       

    }
    else{
        additem.push(cart)
    }
    //UI
    bom.innerHTML="";// remove all the tilte and add new
    additem.forEach((item) => {
        bom.innerHTML += `<p>${item.title} ${item.qta}</p>`;
    });
    
   // additem=[...additem,cart]//...to return the old item with new
   
   // let retuniq =getuniquearr(additem,"id")
    //save data
    localStorage.setItem("productcart",JSON.stringify(additem))
    //add counter to item
    badg.style.display = "block";
    let len = document.querySelectorAll('.title div p'); // Here it will work correctly
    badg.innerHTML = len.length;
}else{
    window.location("")
}
}

function getuniquearr(arr,filtertype){
                                 //[1,1,1]
    let uniq=arr.map((item)=>item[filtertype]).map((item,i,final)=>final.indexOf(item)===i && i)//filter is all array ,i is index item is 1,1,1
    .filter((item)=>arr[item])//withut false
    .map((item)=>arr[item])

    
    return uniq
}

function checkuser() {
    if (localStorage.getItem('username')) {
        window.location = "cart.html";
    } else {
        window.location = "login.html";
    }
}


function savedata(id){
    localStorage.setItem("proid",id)
    window.location="cartdetalis.html"
}
let input=document.getElementById("search")
input.addEventListener("keyup",function(e){
    //if(e.keyCode===13){code of enter in keyboard =13
        search(e.target.value,JSON.parse(localStorage.getItem("products")))

    

    

    if(e.target.value.trim()===""){
        addprod()
    }
})


function search(title,myarray){
    // for(var i=0 ;i<myarray.length;i++){
    //     if(myarray[i].title===title)
    //         console.log(myarray[i])
    // }

    let arr=myarray.filter((item)=>item.title.toLowerCase().indexOf(title.toLowerCase())!==-1)
    let pro = arr.map((item) => {
        return `<div class="product-item" style="border:${item.isMe==="Y" ? "5px solid tomato":""}">
        <img src="${item.imageUrl}" class="product-item-img" alt="">
        <div class="product-des">
            <h2>${item.title}</h2>
            <a class="bba" onclick="savedata(${item.id})">details</a>
            <p > ${item.desc}</p>
             <span>${item.size}</span>
              ${item.isMe==="Y"&&"<button class='edit' onclick='editpro("+item.id+")'>EDIT</button>"}
        </div>

        <div class="actions">
            <button class="add-to-cart" id="addcart" onclick="addtocart('${item.id}')">Add to Cart</button>
            <i class="fav fa-regular fa-heart" style="color:${item.liked==true ? "red" : ""}" onclick="addtofav('${item.id}')"></i>
        </div>
    </div>`;
}).join(''); // Join the array into a string to avoid commas between elements of arry of map function return  array and comma in innerhtml 
    
    dom.innerHTML = pro;
    

    
}
//search("CAMERA",JSON.parse(localStorage.getItem("productsDB")))



//add to fav
let fav=localStorage.getItem("productfav")?JSON.parse(localStorage.getItem("productfav")):[];
function addtofav(id) {
    if(localStorage.getItem("username")){
    let cart = products.find((item) => item.id == id);
    cart.liked=true
    fav=[...fav,cart]
    let retuniq =getuniquearr(fav,"id")
    localStorage.setItem("productfav",JSON.stringify(retuniq))
    products.map(item=>{
        if(item.id===cart.id)
        item.liked=true;

    })
    localStorage.setItem("products",JSON.stringify(products))

  
    
    addprod(products)
    
}else{
    window.location("login.html")
}
}

//filter by size
let fil=document.getElementById("sizefilter")
fil.addEventListener("change",filsize)
function filsize(e){//event what  write in html or select
    let val=e.target.value
    let products=JSON.parse(localStorage.getItem("products"))||products
    
    if(val==="all"){
        addprod()
       
        
    }
    else{
        console.log(products)
        product=products.filter((i)=>i.size===val)
        let pro1 = product.map((item) => {
            return `<div class="product-item" style="border:${item.isMe==="Y" ? "5px solid tomato":""}">
            <img src="${item.imageUrl}" class="product-item-img" alt="">
            <div class="product-des">
                <h2>${item.title}</h2>
                <a class="bba" onclick="savedata(${item.id})">details</a>
                <p > ${item.desc}</p>
                 <span>${item.size}</span>
                 ${item.isMe==="Y"&&"<button class='edit' onclick='editpro("+item.id+")'>EDIT</button>"}
            </div>

            <div class="actions">
                <button class="add-to-cart" id="addcart" onclick="addtocart('${item.id}')">Add to Cart</button>
                <i class="fav fa-regular fa-heart" style="color:${item.liked==true ? "red" : ""}" onclick="addtofav('${item.id}')"></i>
            </div>
        </div>`;
}).join(''); // Join the array into a string to avoid commas between elements of arry of map function return  array and comma in innerhtml 
        dom.innerHTML = pro1;
        
    }


}

function editpro(id){
    localStorage.setItem("editpro",id)
    window.location="editproduct.html"

}
