const expect = require('expect');

const util = require('./util');

it('should add numbers', () => {
  var res = util.add(1, 1)
  expect(res).toBe(2)
});

it('should square a number', () => {
  var res = util.square(2)
  expect(res).toBe(4)
})

describe("asyncAdd", () => {
  it("should add two numbers asyncrounously", (done) => {
    util.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number')
      done();
    })
  });
});

describe("asyncSquare", () => {
  it("should square a number asyncrounously", (done) => {
    util.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number')
      done();
    })
  });
});

describe("setName", () => {
  let user;
  beforeEach(() => {
    user = util.setName({}, 'Gabriel Lewis')
  });
  it("should include a firstname", () => {
    expect(user).toInclude({firstName: 'Gabriel'})
  });

  it("should include a lastname", () => {
    expect(user).toInclude({lastName: 'Lewis'})
  });

  it("should set the correct values for first and last name", () => {
    expect(user.firstName).toBe('Gabriel')
    expect(user.lastName).toBe('Lewis')
  });
});

it("should do nothing", () => {
  
})
