// find the kth element in the given array
function findKthElement(k){
    let arr = [8,9,3,4,5,6,7];
    arr.sort();
    let n = arr.length;
    let maxheap = [];
    for(let i = 0; i < n; i++){
        maxheap.push(arr[i]);
        if(maxheap.length > k){
            maxheap.pop();
        }
    }
    return maxheap[maxheap.length -1];
}
console.log(findKthElement(3))