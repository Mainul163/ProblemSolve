
function mergeSort(arr){


if(arr.length <= 1){
    return arr
}
const mid=Math.floor(arr.length/2)

const left=mergeSort(arr.slice(0,mid));

const right= mergeSort(arr.slice(mid));

return merge(left,right)


}



function merge(left,right) {

    const result=[];

    let i=0; let j=0

    while(i<left.length && j<right.length){
     
        if(left[i]<=right[j]){

            result.push(left[i++])

        }else{
          
            result.push(right[j++])

        }

    }
    return result.concat(left.slice(i).concat(right.slice(j)))

}


const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);


// time complexity O(nlogn)