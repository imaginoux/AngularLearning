let products = [
  {cat:'A',name:'Item1'},
  {cat:'B',name:'Item2'},
  {cat:'A',name:'Item3'}
];

let grouped = products.reduce((acc,p)=>{
  (acc[p.cat] = acc[p.cat]||[]).push(p);
  return acc;
},{});

console.log(grouped);
