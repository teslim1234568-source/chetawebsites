  
   'use strict';
  
  function rendercart () { 
     
    let totalprice = 0;



    document.querySelector('.for-pickedproducts').innerHTML = "";

    document.querySelector('.for-totalprice').innerHTML = '';



    for (let i = 0; i < selectedproduct.length; i++)  {
       const item2 = selectedproduct[i];

       let html2 = `
        <div class = "insideproductpicked">
        <div class = "insideproductpickeddivimg">
         <img  class = "insideproductpickedimg" src = "${item2.productImg}">
         </div>
         <div class = "insideproductpickeddivp">
       <p class = "insideproductpickedp">Productname : ${item2.productName}</p>
       <p class = "insideproductpickedp">Productprice : NGN ${item2.productPrice.toLocaleString()}</p><p class = "insideproductpickedp">Quantity : ${item2.quantity}</p> <button class = "insideproductpickedbutton" onclick ="fordelete(this)"  data-index = "${i}">DELETE</button>
       </p>  
       </div>
       </div
       ` 

        
        document.querySelector('.for-pickedproducts').innerHTML += html2; 


        totalprice +=  Number(item2.productPrice) * item2.quantity;

       
    } 
    
        document.querySelector('.for-totalprice').innerHTML = `NGN ${totalprice.toLocaleString()}`;
  } 

  rendercart(); 


   function fordelete (button) {

     const index = button.dataset.index

     const item = selectedproduct[index];
     if (item.quantity > 1) {
          item.quantity = item.quantity - 1
     }

     else {
          selectedproduct.splice(index,1);
     } 

      localStorage.setItem('myCart', JSON.stringify(selectedproduct));

     rendercart();
   } 

   

   function buyproduct () {
   let forname = document.querySelector('.for-name').value;
   let forlocation = document.querySelector('.for-location').value;

   if (forname === "" || forlocation === '') {
      return alert('please fill your name and location');
   } 

   let totalprice = 0;
   let productDetails = ''; // This will hold the text list of products

   // Loop through cart to calculate total and build the text list
   for (let i = 0; i < selectedproduct.length; i++) {
      const item = selectedproduct[i];
      totalprice += Number(item.productPrice) * item.quantity;  
      
      // Build a simple text line for each product
      productDetails += `- ${item.productName} (x${item.quantity})\n`;
   }

   // 1. Create the final clean message text
   let message = `Hi, my name is ${forname}.\n`;
   message += `Delivery Location: ${forlocation}.\n\n`;
   message += `I want to order:\n${productDetails}\n`;
   message += `Total Price: NGN ${totalprice.toLocaleString()}`;

   // 2. Open WhatsApp with the message (Replace 2340000000000 with your number)
   let phoneNumber = "2348102569125"; 
   let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
   
   window.open(whatsappUrl, '_blank');  

 document.querySelector('.for-name').value = '';

 document.querySelector('.for-location').value = ""; 

  
 localStorage.removeItem('myCart'); 

  document.querySelector('.for-pickedproducts').innerHTML = ""; 

   document.querySelector('.for-totalprice').innerHTML = '';
    
}
          
   
  
  console.table(selectedproduct);
  