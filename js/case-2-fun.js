// btn-case-plus and btn-case-minus function
function updateCaseNumber(isIncrese){
    const caseNumberField= document.getElementById('case-number-field');
    const previousCaseNumber= parseInt(caseNumberField.value);
    // const newCaseNumber= previousCaseNumber + 1;
    let newCaseNumber;
    if(isIncrese === true){
       newCaseNumber= previousCaseNumber + 1;
    }
    else{
       newCaseNumber= previousCaseNumber - 1;
    }
    
    caseNumberField.value= newCaseNumber;
}


// for btn-case-plus
document.getElementById('btn-case-plus').addEventListener('click', function(){

    /*call function*/ 
    updateCaseNumber(true);
});

// for bnt case-minus
document.getElementById('btn-case-minus').addEventListener('click', function(){

    /*call function*/ 
    updateCaseNumber(false);
})