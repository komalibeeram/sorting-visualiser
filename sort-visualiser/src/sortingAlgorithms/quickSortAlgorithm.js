export function getQuickSortAnimations(array){
    const animations = [];
    // if(array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, animations){
    if(startIdx < endIdx){
        let pivot = partition(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pivot - 1, animations);
        quickSortHelper(mainArray, pivot + 1, endIdx, animations);
    }
}

function partition(mainArray, startIdx, endIdx, animations){
    let pivotIdx = endIdx;
    let i = startIdx - 1;
    for(let j = startIdx; j <= endIdx - 1; j++){
        animations.push(["cmp1", j, endIdx]);
        animations.push(["cmp2", j, endIdx]);
        if(mainArray[j] <= mainArray[pivotIdx]){
            i++;
            animations.push(["swap", j, mainArray[i]]);
            animations.push(["swap", i, mainArray[j]]);
            let temp = mainArray[i];
            mainArray[i] = mainArray[j];
            mainArray[j] = temp;
        }
    }
    animations.push(["swap", endIdx, mainArray[i + 1]]);
    animations.push(["swap", i + 1, mainArray[endIdx]]);
    let temp = mainArray[i + 1];
    mainArray[i + 1] = mainArray[endIdx];
    mainArray[endIdx] = temp;
    return (i + 1);
}