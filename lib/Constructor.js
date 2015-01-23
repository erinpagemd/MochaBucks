'use strict';

var _privateVariable = 'foo';
    _privateBoolean = true;


function Constructor (arg){
  this.publicVariable = arg || _privateVariable;
  this.publicBoolean = true;
}

function _privateMethod() {
  return 'Hello World';
}

Constructor.prototype.publicMethod = _privateMethod;
Constructor.prototype.checkPrivateBoolean = function() {
  return _privateBoolean;
};


module.exports = Constructor;
