function sumOfProducts(n1, n2) {
    let str1 = n1.toString().split("").reverse(); 
    let str2 = n2.toString().split("").reverse(); 
    let minLength = Math.min(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < minLength; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }

    return sum;
}


console.log(sumOfProducts(6, 34));   
console.log(sumOfProducts(123, 456)); 
console.log(sumOfProducts(89, 1234)); 
console.log(sumOfProducts(0, 56));    
