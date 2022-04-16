// Carousel Functions
const itemsForSale = [
    {
        title: "WORLD OF WARCRAFT ACCOUNT",
        price: "$120",
        cost: 120,
        description: "Lots of achievment unlocks. No raiding or dungeons. It's a gnome....",
        img: "https://wow.zamimg.com/uploads/blog/images/19082-new-gnome-male-character-customization-options-in-shadowlands-more-hairstyles.png",
        button: "Add to Cart"
    },
    {
        title: "MAGIC THE GATHERING CARDS",
        price: "$40",
        cost: 40,
        description: "A singular 60 card black deck. The picture is misleading.",
        img: "https://m.media-amazon.com/images/I/714FYg0ZBHL._AC_SX425_.jpg",
        button: "Add to Cart"
    },
    {
        title: "ANIMAL CROSSING VILLAGER",
        price: "$10,000",
        cost: 10000,
        description: "Worst villager according to all the teir lists.",
        img: "https://www.denofgeek.com/wp-content/uploads/2020/04/Rodney-1.png?resize=333%2C488",
        button: "Add to Cart"
    },
    {
        title: "MEMBERSHIP INTO THE BONK CHOY CLAN",
        price: "$250",
        cost: 250,
        description: "We only play League of Legends and Nancy Drew Games.",
        img: "https://cdnb.artstation.com/p/assets/images/images/017/955/923/large/varizal-zulmi-bonk-choy.jpg?1557982226",
        button: "Add to Cart"
    },
    {
        title: "HALF FULL TUB OF WEIGHT GAINER",
        price: "$10",
        cost: 10,
        description: "This will help you gain weight, and it's decently tasty.",
        img: "https://m.media-amazon.com/images/I/71mNUR8kjHL._AC_SX425_.jpg",
        button: "Add to Cart"
    },
    {
        title: "1 HOUR DOG PETTING SESSION",
        price: "$170",
        cost: 170,
        description: "Visit my dogs and pet them. They are not as cute as the puppy listed.",
        img: "https://www.akc.org/wp-content/uploads/2016/10/Fotolia_934271_S-800x589.jpg",
        button: "Add to Cart",
        shoppingImg: "https://www.akc.org/wp-content/uploads/2016/10/Fotolia_934271_S-800x589.jpg",
    },
];

// Select Items
const img = document.getElementById("product-img");
const title = document.getElementById("product-title");
const price = document.getElementById("product-price");
const description = document.getElementById("product-description");
const cost = document.getElementById("checkout-total-cost");
const addToCartButton = document.getElementById("add-to-cart-button");
const popupMessage = document.getElementById("popup-message");

const prevButton = document.querySelector("#button-prev");
const nextButton = document.querySelector("#button-next");

// Set Starting Product
let currentItem = 0;

// Load Initial Product
window.addEventListener('DOMContentLoaded', function() {
    showProduct(currentItem);
});

// Show Product Based on Item
function showProduct(product) {
    const item = itemsForSale[product];
    img.src = item.img;
    title.textContent = item.title;
    price.textContent = item.price;
    description.textContent = item.description;
    addToCartButton.textContent = item.button;
}

// Show Next Product
nextButton.addEventListener("click", function() {
    currentItem++;
    if(currentItem > itemsForSale.length - 1) {
        currentItem = 0;
    }
    showProduct(currentItem);
});

// Show Previous Product
prevButton.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = itemsForSale.length - 1;
    }
    showProduct(currentItem);
});

// Shopping Cart Functions

addToCartButton.addEventListener("click", function() {
    shoppingCartArray.push(itemsForSale[currentItem].cost);
    showTotalCost();
    addCartInventory();
    const shoppingCartProductList = document.getElementsByTagName("li");
    for (i = 0; i < shoppingCartProductList.length; i++) {
        removeProduct(shoppingCartProductList[i]);
    }
});

function addCartInventory() {
    const addProduct = document.createElement("li");
    addProduct.appendChild(document.createTextNode(`${itemsForSale[currentItem].title} ----- ${itemsForSale[currentItem].price}`));
    document.querySelector("ul").appendChild(addProduct);
    createClose();
}

function createClose(targetElement) {
    const createSpan = document.createElement("span");
    const removeProduct = document.createTextNode("remove");
    createSpan.className = "remove-product";
    createSpan.addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
    createSpan.appendChild(removeProduct);
    targetElement.appendChild(createSpan);
}


function showTotalCost() {
    const initialValue = 0;
    const totalCost = shoppingCartArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue, initialValue
    );
    cost.innerHTML = `Total: $${totalCost}`;
    popupMessage.innerHTML = `Thank you for your order! The full amount of $${totalCost}
    plus a $200 shipping and handling fee has 
    been charged to your credit card!`
}

// Shopping Cart Variables
const shoppingCartItems = document.getElementById("checkout-item-list");
const createListElement = document.createElement("li");
const shoppingCartArray = [];
const checkoutPopup = document.getElementById("checkout-popup");
const closeCheckoutPopup = document.getElementById("close-checkout-popup");

// Checkout Functions
const checkoutButton = document.getElementById("checkout-button");
checkoutButton.addEventListener("click", checkoutClick);
closeCheckoutPopup.addEventListener("click", closeCheckoutPopupClick);

function checkoutClick() {
checkoutPopup.style.display = "block";
}

function closeCheckoutPopupClick() {
    checkoutPopup.style.display = "none";
}

