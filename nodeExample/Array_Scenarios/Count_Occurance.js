let items = ['a','b','a','c','a'];

let count = items.reduce((acc,val)=>{
  acc[val] = (acc[val]||0)+1;
  return acc;
},{});

console.log(count);
