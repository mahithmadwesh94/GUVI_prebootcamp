//Give the Actual cost and Sold cost, Calculate Discount Of Product

function discountPrice(actualCost,soldCost){
  
    let discount = (actualCost-soldCost)/actualCost 

    return discount*100;
   
}
