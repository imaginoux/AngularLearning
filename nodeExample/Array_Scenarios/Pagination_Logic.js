let page = 1;
let size = 2;

let data = [10,20,30,40];

let result = data.slice((page-1)*size, page*size);
console.log(result);
