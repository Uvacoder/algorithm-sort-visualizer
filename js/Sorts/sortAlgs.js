
function bubbleSort(arr) {
    let animations = [];
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                //Returns a coppy of the arrray instead of a reference
                animations.push(arr.slice(0)); 
            }
        }
    }        
    return animations;
}

function insertionSort(arr){

    let animations = [];

    for(let i=0; i<arr.length; i++){
        let temp = arr[i],
            pos = i

        while(pos>0 && temp<arr[pos-1]){
            arr[pos] = arr[pos-1];
            animations.push(arr.slice(0));
            pos--;
        }
        
        arr[pos] = temp;
        animations.push(arr.slice(0));
    }

    return animations;
}


function animateMerge(arr) {
    let animations = [];
    mergeSort(arr, 0, arr.length - 1, animations);

    return animations
}

function mergeSort(arr, start, end, animations){
    
    if(start>=end){
        return;
    }

    const mid = Math.floor((start+end)/2);

    this.mergeSort(arr, start, mid, animations);
    this.mergeSort(arr, mid+1, end, animations);
    this.merge(arr, start, mid, end, animations);
}

function merge(arr, start, mid, end, animations) {
    let arr1Index = start,
        arr2Index = mid +1,
        tempArr = [];

    for(let i = start; i<=end; i++){
        if(arr1Index > mid){
            tempArr.push(arr[arr2Index]);
            arr2Index++;
        }
        else if(arr2Index > end){
            tempArr.push(arr[arr1Index]);
            arr1Index++;
        }
        else if(arr[arr1Index] < arr[arr2Index]){
            tempArr.push(arr[arr1Index]);
            arr1Index++;
        }
        else{
            tempArr.push(arr[arr2Index]);
            arr2Index++;
        }
    }

    for(let i = 0; i<tempArr.length;i++){
        arr[start] = tempArr[i];
        start++;
    }

    animations.push(arr.slice(0));
}


function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
