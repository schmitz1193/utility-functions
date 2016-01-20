var range = require('./range');

module.exports = function (length) {
  return range(length).reduce(function (newArray, current) {
    newArray[current] = current;
    return newArray
  }, {});
};

