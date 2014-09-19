/*
 * mycovex
 * https://github.com/emepyc/mycovex
 *
 * Copyright (c) 2014 Miguel Pignatelli
 * Licensed under the Apache 2 license.
 */

var chai = require('chai');
chai.expect();
chai.should();

var mycovex = require('../lib/mycovex.js');

describe('mycovex module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){
      mycovex.hello('biojs').should.equal("hello biojs");
    });
  });
});
