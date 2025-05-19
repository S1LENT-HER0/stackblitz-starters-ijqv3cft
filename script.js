document.addEventListener("DOMContentLoaded", () => {
  const subscribeForm = document.getElementById("subscribeForm");
  const contactForm = document.getElementById("contactForm");
  const viewCartBtn = document.getElementById("viewCart");
  const cartModal = document.getElementById("cartModal");
  const closeCart = document.getElementById("closeCart");
  const cartItems = document.getElementById("cartItems");
  const clearCart = document.getElementById("clearCart");
  const processOrder = document.getElementById("processOrder");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you for subscribing!");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("contactEmail").value,
        message: document.getElementById("message").value
      };
      localStorage.setItem("contactForm", JSON.stringify(userData));
      alert("Thank you for your message, " + userData.name + "!");
      contactForm.reset();
    });
  }

  if (viewCartBtn && cartModal && closeCart && cartItems && clearCart && processOrder) {
    viewCartBtn.onclick = () => {
      cartModal.style.display = "block";
      updateCartView();
    };
    closeCart.onclick = () => (cartModal.style.display = "none");
    clearCart.onclick = () => {
      sessionStorage.clear();
      updateCartView();
      alert("Cart is cleared!");
    };
    processOrder.onclick = () => {
      sessionStorage.clear();
      updateCartView();
      alert("Thank you for your order!");
    };
  }
});

function addToCart(itemName) {
  sessionStorage.setItem(itemName, itemName);
  alert("Item added: " + itemName);
}

function updateCartView() {
  const cartItems = document.getElementById("cartItems");
  if (!cartItems) return;
  cartItems.innerHTML = "";
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const li = document.createElement("li");
    li.textContent = sessionStorage.getItem(key);
    cartItems.appendChild(li);
  }
}
