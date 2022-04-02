function validacion(valor){
    //asigna el valor del numero de la tarjeta
    let numCard = valor;
    //obtenie el largo del num de la tarjeta
    let lengthNumCard = numCard.length;
    //asigna una varible que guarda la suma de los elementos
    var total = 0;
    //recorre cada uno de los indices del número de la tarjeta
    for(let i=0; i<lengthNumCard; i++){
        //evalua si el indice es igual a cero o es par
        if ( i==0 || i%2 ==0){
            //se multiplica el número por dos
            newIndex = numCard[i]*2;
            //evalua si el número es mayor de 10
            newIndex>=10
            ? total += newIndex%10 + 1
            :total += newIndex
        }
       //se suma el numero directamente al total    
        else{
            total += parseInt(numCard[i])
        }
    }

    //evalua si el total es multiplo de 10
    if (total % 10 == 0){
        return {validation:true, resultado:total}
    }else{
        return {resultado:total, validation:false}
    }
    
}

function test(valor, esperado){
    let patt = validacion(valor)

    if (patt.validation == esperado){
        console.log(`test correct> return: ${patt.validation} expected: ${esperado} \ncard: ${valor} total: ${patt.resultado} \n`)
    }else{
        console.log(`test failed-> return: ${patt.validation} expected: ${esperado} \ncard: ${valor} total: ${patt.resultado} \n`)
    }
}

test("5159484379360058",true)
test("5159484379360088",true)
test("5253027052034762",true)
test("5253027052034752",false)