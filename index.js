 
let bagitem;
   onload();
   function onload()
   {
    let bagitemstr=localStorage.getItem('bagitem');
    bagitem=bagitemstr ? JSON.parse(bagitemstr) : [];
    bagitemicon();
    dispalyitemsonhomepage();
   }
  function addtobag(itemid)
  {
      bagitem.push(itemid);
       localStorage.setItem('bagitem',JSON.stringify(bagitem));
      bagitemicon();
  }

  function bagitemicon()
  {
    let bagitemcoutnelement=document.querySelector(".bag-item-count");
    if(bagitem.length>0)
        {
        bagitemcoutnelement.style.visibility='visible';
         bagitemcoutnelement.innerText=bagitem.length;
        }
        else 
        {
            bagitemcoutnelement.style.visibility='hidden';
        }
  }

function dispalyitemsonhomepage()
{
  let itemscontainerelement = document.querySelector(".items-container");
  if(!itemscontainerelement)
    {
    return;
    }
    let str='';
   items.forEach(item => {

           str+=`<div class="item-container">
                  <img class="item-image" src=${item.image} alt="item image" />
                  <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.count} </div>
                  <div class="company-name">${item.company}</div>
                  <div class="item-name">${item.item_name}</div>
                  <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="orignal-price">Rs ${item. original_price}</span>
                    <span class="discount">( ${item. discount_percentage}% Off )</span>
                  </div>
                  <button class="btn-add-bag" onclick="addtobag(${item.id})">Add to Bag</button>
                </div>`
});
itemscontainerelement.innerHTML =str;
}
 