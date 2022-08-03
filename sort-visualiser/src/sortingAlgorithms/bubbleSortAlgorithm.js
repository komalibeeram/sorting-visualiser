export function getBubbleSortAnimations(array){
    const animations = [];
    // if(array.length <= 1) return array;
    // const auxiliaryArray = array.slice();
    bubbleSortHelper(array, array.length, animations);
    return animations;
}

function bubbleSortHelper(mainArray, arrayLength, animations){
    let swapped;
    for(let i = 0; i < arrayLength - 1; i++){
        swapped = false;
        for(let j = 0; j < arrayLength - i - 1; j++){
            // values we are comparing are pushed once to change color
            animations.push(["cmp1",j,j+1]);
            // values we are comparing are pushed again to revert their color
            animations.push(["cmp2",j,j+1]);
            if(mainArray[j] > mainArray[j + 1]){
                animations.push(["swap",j, mainArray[j + 1]]);
                animations.push(["swap",j + 1, mainArray[j]]);
                let temp = mainArray[j];
                mainArray[j] = mainArray[j + 1];
                mainArray[j + 1] = temp;
                swapped = true;
            }
        }
        if(swapped === false) break;
    }
}

