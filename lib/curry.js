module.exports = function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
}
// IMPORTANT: the curry function accepts 1 argument, but returns a function with TWO arguments!