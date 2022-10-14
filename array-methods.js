export const myLength = (array) => {
    const myError = new Error('You must pass an array');
    if (!Array.isArray(array)) {
        throw myError;
    }

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
    const myError = new Error('You must pass an array');
    if (!Array.isArray(array)) {
        throw myError;
    }

    let receivedArray = [...array];
    let newArray = [];
    for (let i = 0; i < receivedArray.length - 1; i++) {
        newArray[i] = receivedArray[i];
    }
    return newArray;
};

export const myShift = (array, valueToAdd) => {
    const myError = new Error('You must pass an array');
    if (!Array.isArray(array)) {
        throw myError;
    }

    let receivedArray = [...array];
    let newArray = [];
    myPush(newArray, valueToAdd);
    newArray[0] = myPush(newArray, valueToAdd)[0];
    for (let i = 0; i < receivedArray.length; i++) {
        console.log(receivedArray[i]);
        newArray[i + 1] = receivedArray[i];
    }
    return newArray;
};

export const mySome = (array, valueToCheck) => {
    const myError = new Error('You must pass an array');
    if (!Array.isArray(array)) {
        throw myError;
    }

    let receivedArray = [...array];
    return receivedArray.includes(valueToCheck);
};
