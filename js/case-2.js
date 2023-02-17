// for btn-case plus
document.getElementById('btn-case-plus').addEventListener('click', function(){
    
    const caseNumberField= document.getElementById('case-number-field');
    const previousCaseNumber= parseInt(caseNumberField.value);
    const newCaseNumber= previousCaseNumber + 1;
    caseNumberField.value= newCaseNumber;
})

// for bnt case minus
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField=document.getElementById('case-number-field');
    const previousCaseNumber= caseNumberField.value;
    const newCaseNumber= previousCaseNumber -1;
    caseNumberField.value= newCaseNumber;
})