// CHANGE IMAGES BASED ON GLAZING SELECTION ON PRODUCT DETAIL PAGE //

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

// ADD ITEMS TO CART //

var cart = [];

$(document).ready(function(){
    // checks whether the cart is currently empty or already has items in it //
    var temporary=JSON.parse(localStorage.getItem("cart"));
    if (temporary == null) {
        cart = [];
    }
    else {
        cart = temporary;
    }
    // assign selected glazing and amount to stored variables //
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

// STORING ITEMS TO CART //

function listCart(){
    $(function() {
        // checks whether the cart is null //
        if (localStorage.cart != null);
            {
                cart = JSON.parse(localStorage.cart);
            }
    })
}

function addtoCart(flavor, glazing, amount){
    listCart();
    // assign parameters in the object //
    var item = {
        Flavor: flavor,
        Glazing: glazing,
        Amount: amount,
    };
    cart.push(item);
    saveToCart();
}

// save selections to cart //
function saveToCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(localStorage.getItem("cart"));
}