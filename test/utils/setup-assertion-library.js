module.exports = function setup() {
  var chai = require('chai');
  chai.should();
  chai.use(require('chai-as-promised'));
}