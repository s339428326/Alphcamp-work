//Price
const applePrice = document.querySelector('.apple-price');
const orangePrice = document.querySelector('.orange-price');
const peachPrice = document.querySelector('.peach-price');

//Number
const appleNumber = document.querySelector('.apple-number');
const orangeNumber = document.querySelector('.orange-number');
const peachNumber = document.querySelector('.peach-number');

//result
const result = document.querySelector('.result');

//btn
const btnCal = document.querySelector('.btn-cal');

btnCal.addEventListener('click', e =>{
    e.preventDefault;
    const applePriceValue = applePrice.value;
    const orangePriceValue = orangePrice.value;
    const peachPriceValue = peachPrice.value;

    const appleNumberValue = appleNumber.value;
    const orangeNumberValue = orangeNumber.value;
    const peachNumberValue = peachNumber.value;

    const total = applePriceValue * appleNumberValue + orangePriceValue * orangeNumberValue + peachPriceValue * peachNumberValue;

    result.innerText = `${total}`;
    
    //clear
    applePrice.value = '';
    appleNumber.value = '';
    orangePrice.value = '';
    orangeNumber.value = '';
    peachPrice.value = '';
    peachNumber.value = '';
});