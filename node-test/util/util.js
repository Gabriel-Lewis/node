const add = (a,b) => (a + b)

const asyncAdd = (a, b, cb) => {
  setTimeout(() => {
    cb(a + b)
  }, 1000)
};

const square = (x) => (x * x)

const asyncSquare = (x, cb) => {
  setTimeout(() => {
    cb(x * x)
  }, 1000)
}

const setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0],
  user.lastName = names[1]
  return user
}

module.exports = {
  add,
  square,
  setName,
  asyncAdd,
  asyncSquare
}
