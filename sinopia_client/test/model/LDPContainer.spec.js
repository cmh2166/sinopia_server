/**
 * Sinopia Server
 * Sinopia Server. Supports CRUD, following loosely LDP, on Sinopia resources. Top level requires special authorization for creating a group's graph (i.e. PCC, Stanford, etc.).
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SinopiaServer);
  }
}(this, function(expect, SinopiaServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SinopiaServer.LDPContainer();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LDPContainer', function() {
    it('should create an instance of LDPContainer', function() {
      // uncomment below and update the code to test LDPContainer
      //var instane = new SinopiaServer.LDPContainer();
      //expect(instance).to.be.a(SinopiaServer.LDPContainer);
    });

    it('should have the property containerID (base name: "containerID")', function() {
      // uncomment below and update the code to test the property containerID
      //var instane = new SinopiaServer.LDPContainer();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SinopiaServer.LDPContainer();
      //expect(instance).to.be();
    });

    it('should have the property URI (base name: "URI")', function() {
      // uncomment below and update the code to test the property URI
      //var instane = new SinopiaServer.LDPContainer();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instane = new SinopiaServer.LDPContainer();
      //expect(instance).to.be();
    });

  });

}));
