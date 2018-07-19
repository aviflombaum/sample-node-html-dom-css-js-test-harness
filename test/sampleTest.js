'use strict';

process.env.NODE_ENV = 'test';

const pry = require('pryjs')
const expect = require('chai').expect;

describe("Truth", function(){
  before(function () {
    this.jsdom = require('jsdom-global')()
  })

  after(function () {
    this.jsdom()
  })

  it("Works", function(){
    expect(true).to.be.true
  })

  it("has a DOM", function(){
    console.log(document)
    console.log(window.location)
    eval(pry.it)
    expect(document.body.innerHTML).to.be.equal("")
    window.getComputedStyle(document.querySelector("h1"))
  })
})