let creditCardNumber = '123456789'

function maskify(cardNumber){
    let lengthCard = cardNumber.length

    if (lengthCard <= 4){
        return cardNumber;
    }
    else{
        let lengthNumber = cardNumber.length-4;
        let maskifyNumber = '#'.repeat(lengthNumber);
        let finalNumber = cardNumber.slice(-4);
        return maskifyNumber+finalNumber;
    }
}


console.log(maskify("4556364607935616"));
