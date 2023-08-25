/*module.exports = function reverse (n) {
for(var r = 0; n; n = Math.floor(n / 10)) {
        r *= 10;
        r += n % 10;
    }
    return r;
}


module.exports = function reverse (n) {
    let newArr = String(n);
    let result = newArr.split('').reverse().join('');
    return +result;
}  НЕ правильное решение
*/

module.exports = function reverse (n) {
let newArr = String(Math.abs(n));
    let result = newArr.split('').reverse().join('');
    return +result;
}




