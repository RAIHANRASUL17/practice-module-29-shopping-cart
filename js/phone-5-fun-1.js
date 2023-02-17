console.log('phone 5 js file problem so much')

// for btn-phone-plus & minus fuction
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const previousPhoneNumber = parseInt(phoneNumberField.value);
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
/*updatePhoneTotalPrice function*/
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}
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
}
/*--------------------------------*/ 

// for btn-phone-plus
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    /*call function btn-phone-plus & minus fuction*/
    const newPhoneNumber = updatePhoneNumber(true);

    /*call function updatePhoneTotalPrice*/
    updatePhoneTotalPrice(newPhoneNumber)

/*------------------call subTotal Price Start-------------*/ 
// put the function for use plus and minus both
calculateSubTotal()
/*------------------Call subTotal Price End---------------*/ 

})



// for btn-phone-minus
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    /*call function btn-phone-plus & minus fuction*/
    const newPhoneNumber = updatePhoneNumber(false)

    /*call function updatePhoneTotalPrice*/
    updatePhoneTotalPrice(newPhoneNumber)

    /*------------------subTotal Price Start-------------*/ 
    calculateSubTotal()

/*------------------subTotal Price End---------------*/ 

})
