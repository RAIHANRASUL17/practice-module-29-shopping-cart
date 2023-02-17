/*------------------subTotal Price Function Part Start-------------*/ 
function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotal= parseInt(phoneTotalElement.innerText);
    return currentPhoneTotal;
}
/*------------------subTotal Price Function End Start-------------*/ 

/*--------------------------------*/ 
function calculateSubTotal(){
    const currentPhoneTotal_Price=getTextElementValueById('phone-total')
const currentCaseTotal_Price= getTextElementValueById('case-total')
const currentSubTotal= currentPhoneTotal_Price + currentCaseTotal_Price;

// get sub-total then set up
const subTotalElement= document.getElementById('sub-total');
subTotalElement.innerText= currentSubTotal;

// tax Amount
const taxAmount= currentSubTotal*0.10
const taxAmountElement= document.getElementById('tax-amount')
taxAmountElement.innerText= taxAmount;
}
/*--------------------------------*/ 