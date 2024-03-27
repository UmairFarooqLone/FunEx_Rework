$(".slick-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        }
      }
    ]
  });
 
let hamburgerMenu=document.querySelector(".hamburger");
let linkMenu=document.querySelector(".links");

hamburgerMenu.addEventListener("click",()=>{
linkMenu.classList.toggle("showMenu");
})

 // Add functionality to plus and minus buttons
 const minusButton = document.querySelector('.minus');
 const plusButton = document.querySelector('.plus');
 const ticketQuantityInput = document.getElementById('ticket-quantity');
 const totalPriceElement = document.getElementById('total-price');
 const discountedPrice = 9.00; // Update with actual discounted price

 minusButton.addEventListener('click', function() {
   let quantity = parseInt(ticketQuantityInput.value);
   if (quantity > 1) {
     quantity--;
     ticketQuantityInput.value = quantity;
     updateTotalPrice();
   }
 });

 plusButton.addEventListener('click', function() {
   let quantity = parseInt(ticketQuantityInput.value);
   quantity++;
   ticketQuantityInput.value = quantity;
   updateTotalPrice();
 });

 function updateTotalPrice() {
   const quantity = parseInt(ticketQuantityInput.value);
   const totalPrice = quantity * discountedPrice;
   totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`; // Format to 2 decimal places
 }

 // Call updateTotalPrice on initial load to set the total price
 updateTotalPrice();