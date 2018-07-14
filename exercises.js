/**========== QUESTION 1 ==========**/
/**
 * given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
 */

/**
 * Collects all elements of same value from array and puts them in sub-array
 * @param {*} Array 
 * @returns {*} Array
 */
const q1 = (givenArray = []) => {
    //collect distinct elements
    let distinctElem = [];

    //Using reduce instead of map because you don't want to filter afterwards for undefined elements
    return givenArray.reduce((result, reduceElement) => {
        //if element is not yet in {@code distinctElem}
        if (!(distinctElem.includes(reduceElement))) {
            //add to {@code distinctElem}
            distinctElem.push(reduceElement);
            //add to {@code result}
            result.push(givenArray.filter(filterElement => filterElement === reduceElement));
        }
        //return resulting list of concatenated equal elements
        return result;
    }, []);
}

//Without commentary
const q1 = (givenArray = []) => {
    let distinctElem = [];

    return givenArray.reduce((result, reduceElement) => {
        if (!(distinctElem.includes(reduceElement))) {
            distinctElem.push(reduceElement);
            result.push(givenArray.filter(filterElement => filterElement === reduceElement));
        }
        return result;
    }, []);
}

/**========== QUESTION 2 ==========**/
/**
 * Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
 */

/**
 * Finds first set of 2 numbers in array that added together become target integer
 * @param {*} numbers 
 * @param {*} target 
 */
const q2 = (numbers = [], target = 0) => {
    //Keep track of all possible values which would complete the algorithm
    let targets = [];
    //Fill with two result integers
    let result = [];

    //For every element in {@code numbers}
    for(i = 0; i < numbers.length; i++){
        //If the element is in {@code targets}, you're done
        if(targets.includes(numbers[i])){
            //Fill {@code results} with answer integers
            result.push(target-numbers[i]);
            result.push(numbers[i]);
            //Break out of loop elegantly
            i = numbers.length;
        } else {
            //If valid possible answer
            if(target-numbers[i] >= 0){
                //Add counter pair which would complete answer to {@code targets}
                targets.push(target-numbers[i]);
            }
        }
    }
    //Return answer
    return result;
}

//No commentary
const q2 = (numbers = [], target = 0) => {
    let targets = [];
    let result = [];

    for(i = 0; i < numbers.length; i++){
        if(targets.includes(numbers[i])){
            result.push(target-numbers[i]);
            result.push(numbers[i]);
            i = numbers.length;
        } else {
            if(target-numbers[i] >= 0){
                targets.push(target-numbers[i]);
            }
        }
    }
    return result;
}

/**========== QUESTION 3 ==========**/
/**
 * Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
 */

 /**
  * Convert given Hex String representation of colour to RGB, or vice versa
  */
const q3 = (colorCode = "") => {
    return colorCode.charAt(0) === "#" ? hexToRgb(colorCode) : rgbToHex(r, g, b); 
}

/**
 * Convert string rgb colour value to hex colour value
 * @param {*} rgb - String
 */
const rgbToHex = (rgb = "") => {
    //remove spaces in {@code rgb}, '/ /g' instead of ' ' so that it replaces ALL occurences instead of just the first one
    rgb = rgb.replace(/ /g, "");
    //split at comma
    rgbArray = rgb.split(",");
    //create and return hex string, parseInt to make sure you don't take String values with 'wrong' conversion
    return "#" + ((1 << 24) + (parseInt(rgbArray[0]) << 16) + (parseInt(rgbArray[1]) << 8) + parseInt(rgbArray[2])).toString(16).slice(1);
}

/**
 * Convert string representation of hex colour to string of rgb colour
 * @param {*} hex - String
 */
const hexToRgb = (hex = "") => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}