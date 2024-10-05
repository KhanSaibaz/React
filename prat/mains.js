let arr=[3,3,23,2,'fd',1, 'ji',12]
let n= arr.length
let max = 0
for (let i = 0; i < n; i++) {
    if(typeof arr[i] != String){
        if(max<arr[i]){
            max=arr[i]
        }
    }
}

console.log(max);

//  i= 2 j= 3            temp = i = 2   i=3      j= 


// let arr=[3,3,23,2,'fd',1, 'ji',12]
// let arr=[2,3,23,3,'fd',1, 'ji',12]

let arr2=[]
for(let i=0;i<n;i++){
    if(typeof arr[i]!=String) {  
        for( let j=i+1;j<n;j++) {
           if(typeof arr[j]!=String){
            if(arr[i]>arr[j]){
                let temp =arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
           } 
           arr2.push(arr[i])
        }
        console.log(arr);
        
        
    }
}

console.log(arr);
console.log(arr2);



