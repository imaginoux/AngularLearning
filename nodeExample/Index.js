var arr=[1,2,3,4,5,6,7,8,8,3,9];

var duplicates={};
for(let i=0;i<arr.length;i++){
 let num=arr[i];

 if(duplicates[num]){
    duplicates[num]=duplicates[num]+1;
 }else {
    duplicates[num]=1;
 }

}

console.table(duplicates);

let arrKey=Object.keys(duplicates);
for(var i=0; i<arrKey.length;i++){
    if(duplicates[arrKey[i]]>1){
        console.log(arrKey[i],duplicates[arrKey[i]]);
    }
}