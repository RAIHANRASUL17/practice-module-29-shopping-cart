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
// for btn-phone-plus
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    /*call function btn-phone-plus & minus fuction*/
    const newPhoneNumber = updatePhoneNumber(true);

    /*call function updatePhoneTotalPrice*/
    updatePhoneTotalPrice(newPhoneNumber)
})

// for btn-phone-minus
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    /*call function btn-phone-plus & minus fuction*/
    const newPhoneNumber = updatePhoneNumber(false)

    /*call function updatePhoneTotalPrice*/
    updatePhoneTotalPrice(newPhoneNumber)

})
