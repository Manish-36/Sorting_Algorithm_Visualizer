//Merge Sort algorithm
export function getMergeSortAnimations(array){
    const animations = [];
    if(array.length<=1)
    {
        return array;
    }
    const auxiliaryArray = array.slice();
    mergeSortHelper(array , 0 , array.length-1 , auxiliaryArray , animations );
    return animations;
}

function mergeSortHelper(mainArray , startIdx , endIdx , auxiliaryArray , animations){
    if(startIdx===endIdx)
    {
        return;
    }
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(auxiliaryArray,startIdx,middleIdx,mainArray,animations);
    mergeSortHelper(auxiliaryArray,middleIdx+1,endIdx,mainArray,animations);
    doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations);
}

function doMerge(mainArray,startIdx,middleIdx,endIdx,auxiliaryArray,animations){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx+1;

    while(i<=middleIdx && j<=endIdx)
    {
        animations.push([i,j]);
        animations.push([i,j]);

        if(auxiliaryArray[i]<=auxiliaryArray[j])
        {
            animations.push([k,auxiliaryArray[i]]);
            mainArray[k]=auxiliaryArray[i];
            i++;k++;
        }
        else{
            animations.push([k,auxiliaryArray[j]]);
            mainArray[k] = auxiliaryArray[j];
            j++;k++;
        }
    }
    while(i<=middleIdx)
    {
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxiliaryArray[i]]);
        mainArray[k] = auxiliaryArray[i];
        k++;
        i++;
    }
    while(j<=endIdx)
    {
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxiliaryArray[j]]);
        mainArray[k] = auxiliaryArray[j];
        k++;
        j++;
    }
}

//bubble sort algorithm
export function getBubbleSortAnimations(array) {
  const animations = [];
  const n = array.length;
  const arr = array.slice();

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (arr[j] > arr[j + 1]) {
        animations.push([j, arr[j + 1]]);
        animations.push([j + 1, arr[j]]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        animations.push([j, arr[j]]);
        animations.push([j + 1, arr[j + 1]]);
      }
    }
  }

  return animations;
}

//Quick Sort Algorithm
export function getQuickSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  quickSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pivotIdx - 1, animations);
    quickSortHelper(arr, pivotIdx + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push([j, high]);
    animations.push([j, high]);

    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      animations.push([i, arr[i]]);
      animations.push([j, arr[j]]);
    } else {
      animations.push([j, arr[j]]);
      animations.push([j, arr[j]]);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  animations.push([i + 1, high]);
  animations.push([i + 1, high]);
  animations.push([i + 1, arr[i + 1]]);
  animations.push([high, arr[high]]);

  return i + 1;
}

//Heap Sort Algorithm
export function getHeapSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, animations);
  }

  for (let i = n - 1; i >= 0; i--) {
    animations.push([0, i]);
    animations.push([0, i]);
    
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    animations.push([0, arr[0]]);
    animations.push([i, arr[i]]);

    heapify(arr, i, 0, animations);
  }

  return animations;
}

function heapify(arr, n, i, animations) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n) {
    animations.push([largest, left]);
    animations.push([largest, left]);
    animations.push([largest, arr[largest]]);
    animations.push([left, arr[left]]);
    
    if (arr[left] > arr[largest]) {
      largest = left;
    }
  }

  if (right < n) {
    animations.push([largest, right]);
    animations.push([largest, right]);
    animations.push([largest, arr[largest]]);
    animations.push([right, arr[right]]);
    
    if (arr[right] > arr[largest]) {
      largest = right;
    }
  }

  if (largest !== i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    animations.push([i, arr[i]]);
    animations.push([largest, arr[largest]]);

    heapify(arr, n, largest, animations);
  }
}

export function getInsertionSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      
      arr[j + 1] = arr[j];
      
      animations.push([j + 1, arr[j + 1]]);
      animations.push([j, arr[j]]);
      
      j--;
    }

    arr[j + 1] = key;
    
    if (j + 1 !== i) {
      animations.push([j + 1, j + 1]);
      animations.push([j + 1, j + 1]);
      animations.push([j + 1, key]);
      animations.push([j + 1, key]);
    }
  }

  return animations;
}

//Selection Sort Algorithm
export function getSelectionSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      animations.push([minIdx, j]);
      animations.push([minIdx, j]);

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        animations.push([j, arr[j]]);
        animations.push([i, arr[i]]);
      } else {
        animations.push([j, arr[j]]);
        animations.push([minIdx, arr[minIdx]]);
      }
    }

    if (minIdx !== i) {
      animations.push([i, minIdx]);
      animations.push([i, minIdx]);
      
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      
      animations.push([i, arr[i]]);
      animations.push([minIdx, arr[minIdx]]);
    } else {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([i, arr[i]]);
      animations.push([i, arr[i]]);
    }
  }

  return animations;
}