Array.prototype.isEqual = function(array) {
   for (let i = 0; i < array.length; i++) {
    let el = this[i];
    if (el !== array[i]) {
        return false;
    }
   }
   return true;
   
}

console.log([1, 2, 3,].isEqual([1, 2, 3]));