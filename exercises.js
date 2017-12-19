/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

function firstReverse(str){
    if(typeof str === typeof ""){
        var splitStr = str.split("");
        splitStr.reverse();
        return splitStr.join("");
    } else{
        return null;
    }
 }

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */

function alphaOrder(str){
    if(typeof str !== typeof ""){
        return null;
    } else{
        var splitStr = str.split("");
        splitStr.sort();
        return splitStr.join("");
    }
}

 /** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

 function vowelCount(str){
     if(typeof str !== typeof ""){
         return null;
     }else{
         var result = 0;
         var strArr = str.split("");

         for(var i = 0; i < strArr.length; i++){
             if(strArr[i] === "a" || strArr[i] === "A" || strArr[i] === "e" || strArr[i] === "E" || strArr[i] === "i" || strArr[i] === "I" || strArr[i] === "o" || strArr[i] === "O" || strArr[i] === "u" || strArr[i] === "U" || strArr[i] === "y" || strArr[i] === "Y"){
                 result++;
             }
         } 

         return result;
     }
 }

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

function timeConvert(str){
    if(typeof str !== typeof 0 ){
        return null;
    }else{
        var digits = parseInt(str);
        var hours = Math.floor(digits/60);
        var minutes = digits%60;

        return hours + ":" + minutes;
    }
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

 function repeatString(str, times){
     if(typeof str !== typeof "" && typeof time !== typeof 0){
         return null;
     }else{
         var result = "";
         for(var i = 0; i < times; i++){
            result+=str;
         }
         return result;
     }
 }

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
