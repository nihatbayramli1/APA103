//Task 1
function handleDuplicates(data) {
    let cleaned = data.filter((item, index) => data.indexOf(item) === index);
    let removedQty = data.length - cleaned.length;

    return {
        output: cleaned,
        deletedItemsCount: removedQty
    };
}

const numbersList = [1, 2, 2, 3, 4, 4, 4, 5];
console.log(handleDuplicates(numbersList));






//Task 2
function checkPalindrome(str) {
    let reversedStr = "";
    let originalStr = str.toLowerCase();

    for (let char of originalStr) {
        reversedStr = char + reversedStr;
    }

    return originalStr === reversedStr;
}

console.log(checkPalindrome("Mənəm")); 
console.log(checkPalindrome("Qapaq"));  
console.log(checkPalindrome("Ada"));  



//Task 3
const findLargerCount = (list, target) => {
    return list.reduce((total, current) => {
        return current > target ? total + 1 : total;
    }, 0);
};

const values = [100, 250, 50, 400, 120];
console.log(findLargerCount(values, 15));





//Task 4

function evaluateNumber(value) {
    let totalDivisors = 0;

    for (let i = 1; i < value; i++) {
        if (value % i === 0) {
            totalDivisors += i;
        }
    }

    return totalDivisors > value 
        ? `${value} - Abundant` 
        : `${value} - Deficient`;
}

console.log(evaluateNumber(12)); 
console.log(evaluateNumber(13));




//Task 5
const transformToSquare = function(elements) {
    let result = elements.map(function(num) {
        return Math.pow(num, 2);
    });
    return result;
};

const baseArray = [2, 3, 4, 5];
console.log(transformToSquare(baseArray));