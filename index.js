export const myLength = (array) => {
    let receivedArray = [...array];
    let lengthOfArray = 0;
    receivedArray.forEach(() => {
        lengthOfArray++;
    });
    return lengthOfArray;
};

export const myPush = (array, valueToAdd) => {
    const myError = new Error('You must pass an array');
    if (!Array.isArray(array)) {
        throw myError;
    }

    let receivedArray = [...array];
    let newArray = [...receivedArray];
    newArray[receivedArray.length] = valueToAdd;
    return newArray;
};

export const myPop = (array) => {
    let receivedArray = [...array];
    let newArray = [];
    for (let i = 0; i < receivedArray.length - 1; i++) {
        newArray[i] = receivedArray[i];
    }
    return newArray;
};

export const myShift = (array, valueToAdd) => {
    let receivedArray = [...array];
    let newArray = [];
    myPush(newArray, valueToAdd);
    newArray[0] = myPush(newArray, valueToAdd)[0];
    console.log(newArray);
    for (let i = 0; i < receivedArray.length; i++) {
        console.log(receivedArray[i]);
        newArray[i + 1] = receivedArray[i];
    }
    return newArray;
};

export const mySome = (array, valueToCheck) => {
    let receivedArray = [...array];
    if (receivedArray.includes(valueToCheck)) {
        return true;
    }

    return false;
};
