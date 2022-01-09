const arr= [3, 4, 6, 17, 25, 21, 23];
let arr1=[];
let arr2=[];

for(let i=0;i<arr.length;i++){
    if(i<5){
        arr1[i]=arr[i];
    }
    else
        arr2[(i-5)]=arr[i];      
}

function mean(arr){

    let sum = 0

    for(let num of arr){
        sum+=num;
    }

    return sum/ arr.length;
}

function median(arr){
    arr = arr.sort((a,b)=> a-b);
    let half = Math.floor(arr1.length/ 2);
        if(arr.length %2 !== 0){
            return arr[half];
        }
        else{
            let mid1= arr[arr.length/2];
            let mid2= arr[arr.length/2-1];
            return (mid1+mid2)/2;
        }
}



console.log("{\nMean: "+ mean(arr1)+",",
"\nMedian: " + median(arr1)+"\n}");
console.log("{\nMean: "+ mean(arr2)+",",
"\nMedian: " + median(arr2)+"\n}");