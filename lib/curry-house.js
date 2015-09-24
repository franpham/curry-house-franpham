var curry = require('./curry');

// the returned function takes 1 argument where val2 is the SECOND operand;
function calculate (num) {
  return curry(
    function(val1, op) { switch (op) {
      case 'add':
        return function(val2) {
          return val1 + val2;
        };
      case 'subtract':
        return function(val2) {
          return val1 - val2;
        };
      case 'multiply':
        return function(val2) {
          return val1 * val2;
        };
      case 'divide':
        return function(val2) {
          return val1 / val2;
        };
      case 'modulo':
        return function(val2) {
          return val1 % val2;
        };
      case 'power of':
        return function(val2) {
          return Math.pow(val1, val2);
        };
      case ('+'):
        return function(val2) {
          return val1 + val2;
        };
      case '-':
        return function(val2) {
          return val1 - val2;
        };
      case '*':
        return function(val2) {
          return val1 * val2;
        };
      case '/':
        return function(val2) {
          return val1 / val2;
        };
      case '%':
        return function(val2) {
          return val1 % val2;
        };
      case '^':
        return function(val2) {
          return Math.pow(val1, val2);
        };
      }
    },
  num);
}

function random (val1) {
  return {
    to: function(val2) {
      var min = Math.min(val1, val2);
      var max = Math.max(val1, val2);
      return Math.floor(Math.random() * (max - min) + min);
    },
    toInclude: function(val2) {
      var min = Math.min(val1, val2);
      var max = Math.max(val1, val2);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  };
}

var prependGreeting = curry(
  function(val1, val2) {
    return val1 + val2;
  }, 'Hello ');

var add4and5 = calculate(9)('+');

var add5 = calculate(5)('+');
var sub5 = calculate(5)('-');
var multiply5 = calculate(5)('*');
var divide5 = calculate(5)('/');
var mod5 = calculate(5)('%');
var pow3 = calculate(3)('^');

  // the returned function takes 2 arguments where val2 is the FIRST operand;
  function calculator(op) { switch (op) {
    case 'add':
      return function(val1, val2) {
        return val2 + val1;
      };
    case 'subtract':
      return function(val1, val2) {
        return val2 - val1;
      };
    case 'multiply':
      return function(val1, val2) {
        return val2 * val1;
      };
    case 'divide':
      return function(val1, val2) {
        return val2 / val1;
      };
    case 'modulo':
      return function(val1, val2) {
        return val2 % val1;
      };
    case 'power of':
      return function(val1, val2) {
        return Math.pow(val2, val1);
      };
    case ('+'):
      return function(val1, val2) {
        return val2 + val1;
      };
    case '-':
      return function(val1, val2) {
        return val2 - val1;
      };
    case '*':
      return function(val1, val2) {
        return val2 * val1;
      };
    case '/':
      return function(val1, val2) {
        return val2 / val1;
      };
    case '%':
      return function(val1, val2) {
        return val2 % val1;
      };
    case '^':
      return function(val1, val2) {
        return Math.pow(val2, val1);
      };
    }
  };

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};