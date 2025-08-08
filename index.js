const nameList = document.getElementById("nameList");
const total = document.getElementById("total");
const discountTotal = document.getElementById("discountTotal");
const purchaseBtn = document.getElementById("purchaseBtn");
const applyBtn = document.getElementById("applyBtn");
const inputCoupon = document.getElementById("inputCoupon");
const discountContainer = document.getElementById("discount");
applyBtn.disabled = true;
purchaseBtn.disabled = true;
let totalPrice = 0;
const handClick = (data) => {
  const name = data.childNodes[5].innerText;
  const priceWithTk = data.childNodes[7].innerText;
  const price = priceWithTk.split(" ")[0];
  const priceNumber = parseInt(price);
  totalPrice = totalPrice + priceNumber;
  total.innerText = totalPrice;
  discountTotal.innerText = totalPrice;
  const li = document.createElement("li");
  li.innerText = name;
  nameList.appendChild(li);
  if(totalPrice > 0){
    purchaseBtn.disabled = false;
  }
  if(totalPrice >= 200){
    applyBtn.disabled = false;
  }
};


applyBtn.addEventListener("click" , () => {
  if(inputCoupon.value === ""){
    alert("Input is required");
    return;
  }

if(inputCoupon.value === "SELL200"){
  const discountRate = 0.2;
const discount = totalPrice * discountRate;
const totalPriceWithDiscount = totalPrice - discount;
discountContainer.innerText = discount.toFixed(2);
discountTotal.innerText = totalPriceWithDiscount;
}else{
  alert("Coupon does not match")
}
});

purchaseBtn.addEventListener("click", () => {
  totalPrice = 0;
  total.innerText = "00";
  discountTotal.innerText = "00";
  discountContainer.innerText = "00"
  nameList.innerHTML = ""
});
