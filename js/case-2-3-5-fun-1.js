// btn-case-plus and btn-case-minus function
function updateCaseNumber(isIncrese) {
    const caseNumberField = document.getElementById('case-number-field');
    const previousCaseNumber = parseInt(caseNumberField.value);
    // const newCaseNumber= previousCaseNumber + 1;
    let newCaseNumber;
    if (isIncrese === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

// updateCaseTotalPrice function
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


// for btn-case-plus
document.getElementById('btn-case-plus').addEventListener('click', function () {
    /*call function*/
    const newCaseNumber = updateCaseNumber(true);
    /* call function updateCaseTotalPrice*/
    updateCaseTotalPrice(newCaseNumber);
    // 
    calculateSubTotal()
});

// for bnt case-minus
document.getElementById('btn-case-minus').addEventListener('click', function () {
    /*call function*/
    const newCaseNumber = updateCaseNumber(false);
     /* call function updateCaseTotalPrice*/
     updateCaseTotalPrice(newCaseNumber);
    //  
    calculateSubTotal()
})