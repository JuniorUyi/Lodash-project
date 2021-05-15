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
        console.log(startPaddingLength);
        console.log(endPaddingLength);
        let rightPaddingString = '';
        let leftPaddingString = '';

        if (length <= string || startPaddingLength <= 0 || endPaddingLength <= 0) {
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
 
    }
};


console.log(_.pad('hi', 5));



// Do not write or modify code below this line.
module.exports = _;