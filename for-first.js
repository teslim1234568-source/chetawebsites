
  'use strict';


 for (let i = 0;  i < products.length; i++)
   {
     
   const item  = products[i];

    let html = ` 
    <div class = "insidedivproduct">
    <div class = "insidedivproductimgdiv">
    <img  class ="insidedivproductimg"  src = "${item.IMG}">
    </div>
    <div class = "insidedivproductdivp">
   <p>ProductName : ${item.Name}</p>
    <p>Productprice :NGN ${item.Price.toLocaleString()}</p><button class = "insidedivproductbutton"; onclick = "addtocart(this)" data-product-name = "${item.Name}" data-product-price ="${item.Price}"   data-product-img = "${item.IMG}">ADD TO CART</button>
    
    </div>`
    document.querySelector('.show-product').innerHTML += html;

   } 

       function addtocart (button) {
        const productName = button.dataset.productName;
        const productPrice = Number(button.dataset.productPrice);
         const productImg = button.dataset.productImg;
         let matchingitem;

  for (let i = 0; i < selectedproduct.length; i++) {

    const item = selectedproduct[i];

    if (item.productName === productName) {
      matchingitem = item;
    }
  }

  if (matchingitem) {

    matchingitem.quantity += 1;

  } else {

    selectedproduct.push({
      productName: productName,
      productPrice: productPrice,
      productImg : productImg,
      quantity: 1
    });

  } 

      localStorage.setItem('myCart', JSON.stringify(selectedproduct));

         console.table(selectedproduct);

   }

  