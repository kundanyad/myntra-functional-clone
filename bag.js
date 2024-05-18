
 const CONVVIENCE_FEES=99;
let bagitemobject;
onload();
function onload()
{
    loadbagitemsobject();
    dispalybagitems();
    dispalybagsummerey();
}

function dispalybagsummerey()
{

       let bagsummerelement=document.querySelector(".bag-summary");
       let totalitem=bagitemobject.length;
       let totalmrp=0;
       let totaldiscount=0;
        

        bagitemobject.forEach(bagitem=>
            {
                 totalmrp+=bagitem.original_price;
                 totaldiscount+=bagitem.original_price-bagitem.current_price;
            });
            let fianlpayment=totalmrp-totaldiscount+ CONVVIENCE_FEES;
       bagsummerelement.innerHTML=`
       <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalitem}  Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">₹ ${totalmrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-₹${totaldiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">₹ 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">₹ ${fianlpayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`

}

function loadbagitemsobject()
{
    bagitemobject=bagitem.map(itemid=>
        {
           for(let i=0;i<items.length;i++)
            {
                if(itemid==items[i].id)
                    {
                        return items[i];
                    }
            }
        });
     console.log(bagitemobject)
}


function dispalybagitems()
{
let containerelemnt=document.querySelector('.bag-items-container');

let innerHTML='';
bagitemobject.forEach(bagitem=> {
      innerHTML+=generatehtml(bagitem);
});
 containerelemnt.innerHTML= innerHTML;
}

function removefrombag(itemid)
{
    bagitem=bagitem.filter(bagitemid=>bagitemid!=itemid);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    loadbagitemsobject();
    bagitemicon();
    dispalybagitems();
    dispalybagsummerey();
}



function generatehtml(item)
{
   return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>
   
    <div class="remove-from-cart" onclick="removefrombag(${item.id})">X</div>
   </div>`
}