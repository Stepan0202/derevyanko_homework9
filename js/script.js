let hw9_submit1 = document.querySelector("#hw9_submit1");
let hw9_input1 = document.querySelector("#hw9_input1");
let hw9_array;
const hw9_t2Array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let hw9_arrGroups = separateArray(hw9_t2Array); // 2D array where index 0 — odd negative nums, 1 - odd positive, 2 - even negative, 3 - even positive
//Helpfull functions
function separateArray(arr){
    let result = [];
    let oddNegative = [];
    let oddPositive = [];
    let evenNegative = [];
    let evenPositive = [];
    arr.map((el) => {
        switch (true){
            case (el%2 != 0 && el < 0):
                oddNegative.push(el);
                break;
            case (el%2 != 0 && el > 0):
                oddPositive.push(el);
                break;
            case (el%2 == 0 && el < 0):
                evenNegative.push(el);
                break;
            case (el%2 == 0 && el > 0):
                evenPositive.push(el);
                break;
        }
    })
    result.push(oddNegative);
    result.push(oddPositive);
    result.push(evenNegative);
    result.push(evenPositive);
    console.log(result);
    return result;
}
function sumArrayEl(arr){
    let result = 0;
    arr.map((el) => {
        result += el;
    })
    return result;
}
function minElement(arr){
    let element = arr[0];
    let index = 0;
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < element){
            element = arr[i];
            index = i;
        }
    }
    let result = [element, index]; 
    return result;
}
function maxElement(arr){
    let element = arr[0];
    let index = 0;
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > element){
            element = arr[i];
            index = i;
        }
    }
    let result = [element, index]; 
    return result;
}
function displayResults(hw, ans, msg){ // homework number, answer number, text to add in block
    let answerName = `#hw${hw}Answer${ans}`;
    let answerBlock = document.querySelector(answerName);
    answerBlock.innerHTML = msg;
}
//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.
hw9_submit1.addEventListener('click', (e) => {
    e.preventDefault();
    inputValue = hw9_input1.value;
    hw9_array = inputValue.split(",");
    for(let i = 0; i < hw9_array.length; i++){
        hw9_array[i] = parseInt(hw9_array[i]);
    }
    displayResults(9, 0, `Users array: ${hw9_array}`);
    hw9_array.sort((a,b) => {
        return a - b;
    });
    displayResults(9, 1, `Ascending sorted array: ${hw9_array}`);
    hw9_array.splice(1, 3);
    displayResults(9,2, `Ascending sorted array without elements from second to fourth (from index 1 to index 3): ${hw9_array}`);

})

//Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
    //Знайти суму та кількість позитивних елементів.
const hw9_positiveSum = sumArrayEl(hw9_arrGroups[1]) + sumArrayEl(hw9_arrGroups[3]);
const hw9_positiveQuantity = hw9_arrGroups[1].length + hw9_arrGroups[3].length;
displayResults(9, 3, `Sum of positive elements is: ${hw9_positiveSum}. Number of positive elements is: ${hw9_positiveQuantity}` );

    //Знайти мінімальний елемент масиву та його порядковий номер.
const hw9_minElementData = minElement(hw9_t2Array);
const hw9_minElement = hw9_minElementData [0];
const hw9_minElementIndex = hw9_minElementData [1];
displayResults(9, 4, `Element: ${hw9_minElement}, index: ${hw9_minElementIndex}`);
    //Знайти максимальний елемент масиву та його порядковий номер.
const hw9_maxElementData = maxElement(hw9_t2Array);
const hw9_maxElement = hw9_maxElementData [0];
const hw9_maxElementIndex = hw9_maxElementData [1];
displayResults(9, 5, `Element: ${hw9_maxElement}, index: ${hw9_maxElementIndex}`);
    //Визначити кількість негативних елементів.
const hw9_negativeCount = hw9_arrGroups[0].length + hw9_arrGroups[2].length;
displayResults(9, 6, hw9_negativeCount);
    //Знайти кількість непарних позитивних елементів.
const hw9_oddPosCount = hw9_arrGroups[1].length;
displayResults(9, 7, hw9_oddPosCount);
    //Визначити кількість парних позитивних елементів.
displayResults(9, 8, hw9_arrGroups[3].length);
    //Знайти суму парних позитивних елементів.
const hw9_evenPosSum = sumArrayEl(hw9_arrGroups[3]);
displayResults(9, 9, hw9_evenPosSum);
    //Знайти суму непарних позитивних елементів.
displayResults(9, 10, sumArrayEl(hw9_arrGroups[1]));
    //Знайти добуток позитивних елементів.
let hw9_positiveEl = hw9_arrGroups[1].concat(hw9_arrGroups[3]);
let hw9_multiply = BigInt(1);
hw9_positiveEl.map((el) => {
    let bigIntEl = BigInt(el);
    hw9_multiply = BigInt(bigIntEl * hw9_multiply);
})
displayResults(9, 11, hw9_multiply);
    //Знайти найбільший серед елементів масиву, решту занулити.
for(let i = 0; i < hw9_t2Array.length; i++){
    if (hw9_t2Array[i] != hw9_maxElement){
        hw9_t2Array[i] = 0;
    }
}
displayResults(9, 12, hw9_t2Array);
