export function getInsertionSortAnimations(array){
    const animations = [];
    // if(array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    insertionSortHelper(array, array.length, animations);
    return animations;
}

function insertionSortHelper(mainArray, arrayLength, animations){
    let key, j;
    for(let i = 1; i < arrayLength; i++){
        key = mainArray[i];
        j = i - 1;
        animations.push(["cmp1",j,i]);
        animations.push(["cmp2",j,i]);
        while(j >= 0 && mainArray[j] > key){
            animations.push(["ovw",j + 1, mainArray[j]]);
            mainArray[j + 1] = mainArray[j];
            j = j - 1;
            if(j>=0){
            animations.push(["cmp1",j,i]);
            animations.push(["cmp2",j,i]);}
        }
        animations.push(["ovw",j + 1, key]);
        mainArray[j + 1] = key;
    }
}

