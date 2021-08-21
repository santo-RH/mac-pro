


// updateTotal price
function updateTotalPrice() {
  const memoryPrice = document.getElementById('memory-cost');
  const storagePrice = document.getElementById('storage-cost');
  const deliveryCost = document.getElementById('delivery-cost');
  const totalPrice = document.getElementById('all-Total-price');

  const allTotalPrice = 1299 + parseFloat(memoryPrice.innerText) + parseFloat(storagePrice.innerText) + parseFloat(deliveryCost.innerText);

  totalPrice.innerText = allTotalPrice;
  return allTotalPrice;

}

//Memory cost price 
document.getElementById('frist-memory-btn').addEventListener('click', function(){
const memoryCost1 = document.getElementById('memory-cost');
memoryCost1.innerText = '0';
updateTotalPrice() 

})

document.getElementById('second-memory-btn').addEventListener('click', function(){
const memoryCost2 = document.getElementById('memory-cost');
memoryCost2.innerText = '180';
updateTotalPrice() 
})

// storage Cost price

document.getElementById('frist-ssd-btn').addEventListener('click', function(){
  const storageCost1 = document.getElementById('storage-cost');
  storageCost1.innerText = '0';
  updateTotalPrice() 
})
document.getElementById('second-ssd-btn').addEventListener('click', function(){
  const storageCost2 = document.getElementById('storage-cost');
  storageCost2.innerText = '100';
  updateTotalPrice() 
})
document.getElementById('third-ssd-btn').addEventListener('click', function(){
  const storageCost3 = document.getElementById('storage-cost');
  storageCost3.innerText = '180';
  updateTotalPrice() 
})



//delivery Cost price 

document.getElementById('frist-delivery-btn').addEventListener('click', function(){
  
const deliveryCost1 = document.getElementById('delivery-cost');
deliveryCost1.innerText = '0';
updateTotalPrice() 
})
document.getElementById('second-delivery-btn').addEventListener('click', function(){
  const deliveryCost2 = document.getElementById('delivery-cost');
  deliveryCost2.innerText = '20';
  updateTotalPrice() 
})


// discount total price 

document.getElementById('promo-code-btn').addEventListener('click', function () {
  const finalTotalAmount = document.getElementById('final-total-price');

  const promoCode = document.getElementById('copun-input');
  const totalDiscount = (updateTotalPrice() / 100) * 20;
  const finalDiscount = updateTotalPrice() - totalDiscount;
  if (promoCode.value == 'stevekaku') {
      finalTotalAmount.innerText = finalDiscount;
  
  }
  promoCode.value = '';

})