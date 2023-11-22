const swapDigits = (number)=>{
    let swappedNumber = 0
    //write logic here

    if(number >= 0){
        const digits = Array.from(String(number), Number);
        const isEven = digits.length%2 === 0;

        for(let i = isEven ? 0 : 1; i<digits.length - 1; i+=2 ){
            const temp = digits[i];
            digits[i] = digits[i+1];
            digits[i+1] = temp;
        }

        swappedNumber = parseInt(digits.join(''));
            return swappedNumber;
    }
    else {
        return 0;
    }

}

module.exports = swapDigits
