Array.prototype.averageNumber = function () {
    let sum = 0;
    let count = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
        count++;

    }
    console.log(sum / count);
}
let arr = [1, 2, 3, 4, 5];
arr.averageNumber();