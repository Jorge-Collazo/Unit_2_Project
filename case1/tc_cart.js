"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Jorge Collazo
   Date:   2-3-20
   
   Filename: tc_cart.js
	
*/
//Global variables
//Total cost of the order
var orderTotal = 0;
//Declares the contents of the shoping cart
var cartHTML = "<table><tr><th>Item</th><th>Description</th>Price</th><th>Qty</th><th>Total</th></tr>"
//
for(var i=0; i<item.length; i++){
   //come back to check step 12 a.
   cartHTML = "<tr><td><img src='" + tc_item.png + "' alt='" + item[i] + "'/></td>"
   cartHTML +="<td>" + itemDescription[i] + "</td><td>" + $itemPrice[i] + "</td><td>" + itemQty[i] + "</td>"
}