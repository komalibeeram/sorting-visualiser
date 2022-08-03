export function getSelectionSortAnimations(array){
    const animations = [];
    // if(array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    selectionSortHelper(array, array.length, animations);
    return animations;
}

function selectionSortHelper(mainArray, arrayLength, animations){
    let minIdx;
    for(let i = 0; i < arrayLength - 1; i++){
        minIdx = i;
        for(let j = i + 1; j < arrayLength; j++){
            animations.push(["cmp1",j,minIdx]);
            animations.push(["cmp2",j,minIdx]);
            if(mainArray[j] < mainArray[minIdx]){
                minIdx = j;
            }
        }
        animations.push(["swap",minIdx,mainArray[i]]);
        animations.push(["swap",i,mainArray[minIdx]]);
        let temp = mainArray[minIdx];
        mainArray[minIdx] = mainArray[i];
        mainArray[i] = temp;
    }
}

