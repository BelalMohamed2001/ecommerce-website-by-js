let item = localStorage.getItem("productcart");
let dom = document.querySelector(".products");
let nopro=document.querySelector(".nopro");
if (item) {
    let items = JSON.parse(item);
    drawcart(items);
}

function drawcart(products) {
    if(JSON.parse(localStorage.getItem("productcart")).length===0)
        nopro.innerHTML="<h2>there is no product</h2>";
    let pro = products.map((item) => {
        return `<div class="product-item">
                    <img src="${item.imageUrl}" class="product-item-img" alt="">
                    <div class="product-des">
                        <h2>${item.title}</h2><br>
                        <span> Quantity: ${item.qta}</span>
                        <p>${item.desc}</p>
                         <span>${item.size}</span>
                    </div>

                    <div class="actions">
                        <button class="add-to-cart" id="addcart" onclick="removecart('${item.id}')">Remove from Cart</button>
                        <i class="fav fa-regular fa-heart"></i>
                    </div>
                </div>`;
    })

    dom.innerHTML = pro;
}

function removecart(id) {
    let item = localStorage.getItem("productcart");
    
    if (item) {
        let reitem = JSON.parse(item);
        let filteritem = reitem.filter((p) => p.id != id); // filter because return the rest of array and need to variable to add it
        console.log(filteritem)// but the org array dont remove and when remove again retur tjr remove item again beacuse the orginal arrat on local storge
        //drawcart(filteritem);
        localStorage.setItem("productcart", JSON.stringify(filteritem));//local storge dont accept any thinj only string 
        //and setitem to delete the original array and add new araray in loacl storge and remove the old aray
        drawcart(filteritem)
    }
}
