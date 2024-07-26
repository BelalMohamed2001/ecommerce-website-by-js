// get from local storge
let get_user=localStorage.getItem("username")//not object 
let get_email=localStorage.getItem("email")//not object 
let products=JSON.parse(localStorage.getItem("products"))||productsDB//onject
let mypro=products.filter((i)=>i.isMe==="Y")

//variable
let user2=document.getElementById("username")
let email2=document.getElementById("email")
let productlen=document.querySelector("#productlen span")

user2.innerHTML=get_user
email2.innerHTML=get_email
if(mypro.length!=0){
productlen.innerHTML=mypro.length
}
else{
    productlen.remove()//to remove the html
}