
const chooseDistance = (t, k, ls) => {
    let arr = [];
    arr = ls.sort((a,b) => a - b).slice(0,3).reduce((a, b) => {
           a += b ;
           
           return a;
      });
     
      console.log(arr);
      if(arr <= t && ls.length === k) {
          return arr;
      }else return null;
    // return null;
}

console.log( chooseDistance(174, 3, [51, 57, 65,33,55])); //173
console.log(chooseDistance(163, 3, [50])); // null
console.log(chooseDistance(123, 4, [33,45,999,33]));

