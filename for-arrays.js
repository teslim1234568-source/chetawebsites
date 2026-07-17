
  'use strict'

const products = [
 {
   Name : 'RedShirt' ,
  IMG : '../for-image/red_shirt-removebg-preview.png', 
   Price :  20000
 },
  {
      Name : 'BlueShirt' ,
      IMG : '../for-image/blue.shirt-removebg-preview.png',
   Price :  30000
  },
  {
      Name : "Greenshirt",
       IMG : '../for-image/green_shirt-removebg-preview.png',
      Price : 40000
  },
  {
      Name : 'BlackShirt' ,
      IMG : '../for-image/black_shirt-removebg-preview.png',
   Price :  10000
  },
  {
      Name : 'WhiteShirt' ,
      IMG : '../for-image/white_shirt-removebg-preview.png',
   Price :  15000
  },
  {
      Name : 'YellowShirt' ,
      IMG : '../for-image/istockphoto-172874489-1024x1024-removebg-preview.png',
   Price :  30000
  }
];

 const selectedproduct = JSON.parse(localStorage.getItem('myCart')) || [];