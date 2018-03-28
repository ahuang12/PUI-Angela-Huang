$(document).ready(function(){
    displayCart();
    countCart();
/*    removeItemFromCart()*/
    });

// DISPLAY CART INTO SHOPPING CART PAGE //

function displayCart(){
    for (var i = 0; i<cart.length; i++) {
        var item = cart[i].Flavor+", "+cart[i].Glazing+", "+cart[i].Amount;
        // learned about HTML DOM create text node from W3 School //
        // create a <li> element under the <ol> element for each item in the cart //
        var newelement = document.createElement("li");
        var textnode = document.createTextNode(item);
        newelement.appendChild(textnode);
        document.getElementById("cartinfo").appendChild(newelement);
        // create a remove button after each item //
        $("#cartinfo").append("<button>Remove Item</button>");
    }
}

// REMOVE ITEMS FROM CART //
// Each item in the cart needs to have a unique ID so that the removeItemFromCart() function can use the unique ID to know which item to delete from cart //

/*function removeItemFromCart() {}
    }
    $(document).on("click", "button", function() {
        for (var i in cart) {
            cart.splice(cart[i])
        }
        learnedocalStorage.removeItem();
    });
}*/

// COUNT NUMBER OF ITEMS IN THE CART //

function countCart() {
    var totalcount = 0;
    for (var i in cart) {
        // learned about changing a string to an integer from W3 School //
        totalcount += parseInt(cart[i].Amount);
    }
    document.getElementById("numberofitemsincart").append(totalcount);
}




