let products=JSON.parse(localStorage.getItem("products"))||productsDB
let proid=JSON.parse(localStorage.getItem("editpro"))
let getpro=products.find(i=>i.id==proid)//filter return array of object of this id we need find to return object




 let productname=document.getElementById("pro-name")
 let productdes=document.getElementById("pro-des")
 let productdsize=document.getElementById("sizd")
 let productform=document.getElementById("form")
 let inputfile=document.getElementById("upload_image")
 let proimage;

 //to show what are you add befor
 productname.value=getpro.title//to show to user when click edit what he insert befor
 productdes.value=getpro.desc
 productdsize.value=getpro.size

 proimage=getpro.imageUrl//if we do no t change its save in url

// //event
 productdsize.addEventListener("change",getsize)
productform.addEventListener("submit",updateinfo)
inputfile.addEventListener("change",imageinfo)

// //functions
function getsize(e){
     productdsize=e.target.value;
}

function updateinfo(e){

     e.preventDefault();//to make submit and turnoff the event of function//form
     getpro.title=productname.value
     getpro.desc=productdes.value
     getpro.size=productdsize
     getpro.imageUrl=proimage

     localStorage.setItem("products",JSON.stringify(products))
     setTimeout(()=>{
        window.location="index.html"
     },400)
//     let allproducts=JSON.parse(localStorage.getItem("products"))||productsDB;// to get the product old
//     let namevalue=productname.value// what i am write in html
//     let desvalue=productdes.value

// if(namevalue && desvalue){// validation to write in html
//     let obj={
//         id:allproducts?String(allproducts.length+1):'1',
//         qta:1,
//         imageUrl:proimage,
//         size:productdsize,
//         title:namevalue,
//         desc:desvalue,
//         isMe:"Y"
//     }

//     let newpro=allproducts?[...allproducts,obj]:[obj]// to make the oldpro+newpro
//     localStorage.setItem("products",JSON.stringify(newpro))
//     productname.value="";
//     productdes.value="";
//     productdsize.value="";
//     setTimeout(()=>{
//         window.location="index.html"
//     },1500)
    



// }

// else{
//     alert("Enter the Data ...............")
// }
 }

function imageinfo(){
    let file=this.files[0]//this is return to addeventlisten and image info return to addevent and this has files i need first file
    
    let types=[ "image/jpeg","image/png"]
    

    if (types.indexOf(file.type) ==-1 ){
        alert("Type not suported")
        return;
    }

    if(file.size>2*1024*1024){
        alert("image exceed 2MG")
        return
    }

    //proimage=URL.createObjectURL(file)//make image as some character and numbers
    base64(file)
}

function base64(file){//to make the file image link to save it in server or local(base64) host to return link and add in source
    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=function(){
        proimage=reader.result
    }
    reader.onerror=function(){
        alert("error")
    }
 }