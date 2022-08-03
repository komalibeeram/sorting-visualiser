export function getHeapSortAnimations(array){
    const animations = [];
    // const auxiliaryArray = array.slice();
    heapSortHelper(array, animations);
    return animations;
}

function heapSortHelper(mainArray, animations){
    let n = mainArray.length;
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(mainArray, n, i, animations);
    for( let i = n - 1; i > 0; i--){
        animations.push(["swap",i,mainArray[0]]);
        animations.push(["swap",0,mainArray[i]]);
        let temp = mainArray[0];
        mainArray[0] = mainArray[i];
        mainArray[i] = temp;
        heapify(mainArray, i, 0, animations);
    }
}

function heapify(mainArray, length, nodeIdx, animations){
    let largest = nodeIdx;
    let left = 2 * nodeIdx + 1;
    let right = 2 * nodeIdx + 2;
    if(left < length && mainArray[left] > mainArray[largest]){
        animations.push(["cmp1", nodeIdx, left]);
        animations.push(["cmp2", nodeIdx, left]);
        largest = left;
    } 
    if(right < length && mainArray[right] > mainArray[largest]){
        animations.push(["cmp1", right, largest]);
        animations.push(["cmp2", right, largest]);
        largest = right;
    } 
    if(largest !== nodeIdx){
        animations.push(["swap",nodeIdx,mainArray[largest]]);
        animations.push(["swap",largest,mainArray[nodeIdx]]);
        let temp = mainArray[nodeIdx];
        mainArray[nodeIdx] = mainArray[largest];
        mainArray[largest] = temp;
        heapify(mainArray, length, largest,animations);
    }
}