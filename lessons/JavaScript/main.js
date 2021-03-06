/* What is JavaScript?
 * JS is an object-oriented coding language. */

/* What is an object?
 * An object is a collection of properties. */

var myObj = {
  color: 'blue',
  getColor: function () {
    console.log(this.color)
  },
  size: 10,
  shape: 'round'
};

// myObj.getColor();

/* What is a function
 * A function is a set of code that can be
 * reused by calling its name. It can take
 * arguments, and can return a value. */

function formatString(str) {
  if (typeof str !== 'string') {
    console.log(typeof str);
    return false;
  }

  var formattedString = str + '!';
  return formattedString;
}

var myString = formatString('my string');
// console.log(myString);

// var myNumber = formatString(10);
// console.log(myNumber);

/* What is a method?
 * A method is a function that belongs to
 * an class. */

class Dog {
  constructor (size) {
    this.size = size;

    this.bark = function () {
      switch(this.size) {
        case 'small':
          console.log('yip!');
          break;
        case 'big':
          console.log('WOOF!');
          break;
        default:
          console.log('bark!');
      }
    }
  }
};

var fido = new Dog('small');
// fido.bark();
// console.log(fido);

var spot = new Dog('big');
// spot.bark();
// console.log(spot);

var sparky = new Dog();
// sparky.bark();
// console.log(rover);

/* What is a type?
 * In JS, there are a number of types that
 * are built into the language, including
 * String, Array, and Object. Types have
 * methods, and we can also expand the
 * properties of a type. */

var myArray = ['red', 'blue', 'yellow'];
// console.log(myArray);
// console.log(myArray.length);

var myJoinedArray = myArray.join();
// console.log(myJoinedArray);

Object.prototype.logEveryPropName = function () {
  for (prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(prop);
    }
  }
};

var fruitObj = {
  apple: {
    color: 'red',
    shape: 'round'
  },
  banana: {
    color: 'yellow',
    shape: 'weird'
  }
};
// console.log(fruitObj);

// fruitObj.logEveryPropName();
