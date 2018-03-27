// CHANGING IMAGES BASED ON GLAZING SELECTION ON PRODUCT DETAIL PAGE //

function changetonone() {
    document.getElementById("detailsimage").src="Assets/Images/none.png";
}

function changetosugar() {
    document.getElementById("detailsimage").src="Assets/Images/sugar.png";
}

function changetovanilla() {
    document.getElementById("detailsimage").src="Assets/Images/vanilla.png";
}

function changetochocolate() {
    document.getElementById("detailsimage").src="Assets/Images/chocolate.png";
}

// SHOPPING CART //

// adding items to cart //

var cart = [];

$(document).ready(function(){
    $("#addtocartbutton").click(function(){
        var flavor = "Original";
        var glazing = "";
        var amount = 0;
        var glazingselection = document.getElementsByName("glazing");
        var amountselection = document.getElementsByName("amount");
    for (var i = 0; i < glazingselection.length; i++) {
        if (glazingselection[i].checked) {
            glazing = glazingselection[i].value;
            break;
            }
        }
    for (var i = 0; i < amountselection.length; i++) {
        if (amountselection[i].checked) {
            amount = amountselection[i].value;
            break;
            }
        }
    listCart();
    addtoCart(flavor, glazing, amount);
    })
})

// storing items in cart //

function listCart(){
    $(function() {
        if (localStorage.cart != null);
            {
                cart = JSON.parse(localStorage.cart);
            }
    })
}

function addtoCart(flavor, glazing, amount){
    listCart();
    var item = {
        Flavor: flavor,
        Glazing: glazing,
        Amount: amount,
    };
    cart.push(item);
    saveToCart();
    displayCart();
}

function saveToCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

// displaying stored items (array of objects) in the shopping cart page //

function displayCart(){
    for (var i = 0; i<cart.length; i++) {
        var item = cart[i];
        console.log(item);
        var newelement = document.createElement("LI");
        var textnode = document.createTextNode(item);
        newelement.appendChild(textnode);
        document.ol.appendChild(newelement);
    }
}

// remove items from cart //

function removeItemFromCart(flavor, glazing) {
    for (var i in cart) {
        if (cart[i].flavor === flavor) {
            if (cart[i].glazing === glazing) {
                cart.splice(i, 1);
                break;
            }
        }
    }
}

// display how many items are in the cart //

function countCart() {
    var totalcount = 0;
    for (var i in cart) {
        totalcount += cart[i].amount
    }
    return totalcount;
    $("#numberofitemsincart").append(totalcount)
}




