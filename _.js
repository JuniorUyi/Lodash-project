const _ = {
    // Clamp method: current value = number, lower bound = smallest allowed value, upper bound = largest allowed value.

    // clamp (number, lowerNum, upperNum) {
    //     if (number < lowerNum) {
    //         return lowerNum;  //Clamps values by lower bound
    //     } else if (number > upperNum) {
    //         return upperNum;  // Clamps values by upper bound
    //     } else {
    //         return number; //Returns in-range values unmodified.
    //     }
    // },
    clamp (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower); // Clamps values by lower bound
        const  clampedValue = Math.min(lowerClampedValue, upper); //Clamps values by upper bound
        return clampedValue;//Returns in-range values unmodified.
    },

    //InRange method: number within a start value and an end value.

    // inRange (number, startValue, endValue) {
    //     if (endValue === undefined) {
    //         endValue = startValue;
    //         startValue = 0; // startvalue = 0. Not equal to null. null is an object data type.
    //         return true;         //Uses end value as start value and start value as 0, if end value is not defined.
    //     } else if (startValue > endValue) {
    //         let first = startValue;
    //         let last = endValue;
    //         first, last = last, first;
    //         return true;  //Reverses start and end values if start value is bigger than end value.
    //     } else if(number < startValue || number >= endValue) {
    //         return false;  //If small value or large value is out of range, value is equal to end value.....
    //     } else {
    //         return true;  //The rest... if value is same as start value, if in-range value is in range.
    //     }
    // },

    inRange (number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0; // startvalue = 0. Not equal to null.
            return true;         //Uses end value as start value and start value as 0, if end value is not defined.
        } else if (start > end) {
            let temp = end;
            end = start;
            start = temp
            return true;  //Reverses start and end values if start value is bigger than end value.
        } else if(number >= start && number < end) {
            return true;  //If value is same as start value, if in-range value is in range.
        } else {
            return false;  //The rest... if small value or large value is out of range, value is equal to end value.....
        }
    },

    //Words method: Input: string, output: splits strings into array of words.

    words(string) {
        const words = string.split(' ');
        return words;
    },

    //Pad method: String and a length. Add spaces evenly to both sides to reach desired length.
    // pad(string, length) {

    //     const startPaddingLength = (Math.floor((length - string.length) / 2));
    //     console.log(startPaddingLength);
    //     const endPaddingLength = length - string.length - startPaddingLength;
    //     console.log(endPaddingLength);
    //     let paddingString = '*';

    //     if (length <= string || startPaddingLength <= 0 || endPaddingLength <= 0) {
    //         return string;
    //     }

    //     return paddingString.repeat(startPaddingLength) + string + paddingString.repeat(endPaddingLength);
    // },

    pad(string, length) {
        
        let startPaddingLength = Math.floor((length - string.length)/ 2);
        let endPaddingLength = length - string.length - startPaddingLength;
        // console.log(startPaddingLength);
        // console.log(endPaddingLength);
        let rightPaddingString = '';
        let leftPaddingString = '';

        if (length <= string.length || startPaddingLength <= 0 || endPaddingLength <= 0) {
            return string;
        } 

        while (startPaddingLength > 0) {
            leftPaddingString += ' ';
            startPaddingLength--;
        }

        while (endPaddingLength > 0) {
            rightPaddingString +=' ';
            endPaddingLength--;
        }

        return  leftPaddingString +  string + rightPaddingString;
 
    },

    // has(object, key) {
    //     return object[key] ? true : false;
    // },

    // has(object, key) {
    //     return !!object[key];
    // },

    has(object, key) {
        let hasValue = true
        if(object[key] === undefined) {
            hasValue = false;
        }
        return hasValue;
    },

    // has(object, key) {
    //     return object.hasOwnProperty(key);
    // },

    // invert(object) {

    //     for(let [key, value] of Object.entries(object)) {
    //         return [key, value] = [value, key];
    //     }
    // }, // This doesn't work like I want.

    //Invert and object - {key: value}  to  {value: key}
    invert(object) {
        const invertedObject = {};

        for(const key in object) { // Iterates through every key/value pair or property
            const originalValue = object[key]; // Gives the new const a value of "value", since we wrote [key]
            // console.log(originalValue);
            invertedObject[originalValue] = key;
            // invertedObject.originalValue = key;  //OriginalValue will not be read, no need to delare it..
            // invertedObject = {originalValue: key}; // Only works with let
        }
        return invertedObject;
    },
    // Finds the key in the object with the truthy value.
    findKey(object, predicate) {
        for (const key in object) {
            if(object.hasOwnProperty(key)) { //So you need to make your for...in loop safe using hasOwnProperty check. To prevent looking into the prototype of that parent object.
                const value = object[key];
                const predicateReturnValue = predicate(value);
                if(predicateReturnValue) {
                    return key;
                } 
            }
        }
        return undefined;
    },
//Items to drop from the beginning of the array.
    drop(array, numberItems) {
        if(typeof numberItems !== 'number'){
            if(numberItems === undefined) {
                numberItems = 1;
            }
        }
        const droppedArray = array.slice(numberItems, array.length);
        return droppedArray;
    },

    // dropWhile(array, predicate) {
    //     const dropNumber = array.findIndex((element, index) => {
    //         const currentElement = element;
    //         // console.log("Current Element", currentElement)
    //         const currentIndex = index;
    //         // console.log("Current Index", currentIndex);
    //         const predicateArray = predicate(currentElement, currentIndex, array);
    //         // console.log("Boolean Value", predicateArray);
    //         if(!predicateArray) {
    //             return index;
    //         }
    //     });

    //     const droppedArray = this.drop(array, dropNumber)
        
    //     return droppedArray;
    // },
    // dropWhile(array, predicate) {
    //     let index;
    //     for (let i = 0; i < array.length; i++) {
    //         if(!predicate(array[i], i, array)) {
    //             index = i;
    //             console.log(array[i], index);
    //         } 
    //     }
    //     const droppedArray = this.drop(array, index);
    //     return droppedArray;
    // },

    dropWhile(array, predicate) {
        let index = 0;
        while(predicate(array[index], index, array)) {
            index +=1
        }
        return this.drop(array, index);
    },

    // dropWhile(array, predicate) {
    //     const cb = (element, index) => {
    //         return !predicate(element, index, array);
    //     };
    //     let dropNumber = array.findIndex(cb);
    //     let droppedArray = this.drop(array, dropNumber);
    //     return droppedArray;
    // }

    // chunk(array, size = 1) {
    //     // if(typeof size !== 'number'){
    //     //     if(size === undefined) {
    //     //         size = 1;
    //     //     } 
    //     // }
    //     const arrayChunks = [];
    //     let index = 0;
    //     while(index < array.length) {

    //         let arrayChunk = array.slice(index, index+size);
    //         console.log(arrayChunk);
    //         index += size;
    //         arrayChunks.push(arrayChunk);
    //     }

    //     return arrayChunks;
    // },

    chunk(array, size) {
        if(typeof size !== 'number'){
            if(size === undefined) {
                size = 1;
            } 
        }
        let arrayChunks = [];
   
        for (let i = 0; i < array.length; i+=size) {

            let arrayChunk = array.slice(i, i+size);
            // console.log(arrayChunk);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }


}


// console.log(_.pad('hi', 5));
// console.log(_.invert({mykey: 'myvalue'}));

// const isMorethanFour = (num) => num < 4; 

// console.log(_.dropWhile([1, 2, 3, 4, 5, 6], isMorethanFour));

console.log(_.chunk([1,2,3,4,5,6,7], 3))

// Do not write or modify code below this line.
module.exports = _;