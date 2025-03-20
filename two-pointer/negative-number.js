function findNegativeNumber(array,k){

    const result = [];
    const negativeQueue = [];

 for(let i=0;i<k;i++){
   if(array[i] <0) {
    negativeQueue.push(i)
   }
 }

 result.push(negativeQueue.length>0?array[negativeQueue[0]]:0)

 for(let i=k;i<array.length;i++){

    if(negativeQueue[0] <=  i- k ){
        negativeQueue.shift();
    }

    if(array[i]<0){
        negativeQueue.push(i);
    }
    result.push(negativeQueue.length>0?array[negativeQueue[0]]:0)
 }

 
return result
}





const arr1 = [12, -1, -7, 8, -15, 30, 16, 28];
const k1 = 3;

console.log(findNegativeNumber(arr1,k1))