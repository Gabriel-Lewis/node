# Node and Mocha Testing

This repository houses my code getting used to Mocha.js and testing with Node.js

## Basic Tests

Below is an example of the basic tests I created to test Mocha out

```javascript
// util/util.js
const setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0],
  user.lastName = names[1]
  return user
}

// /util/util.test.js
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
```

 ## Testing a Express.js App

 This repsitory also houses tests for testing a Express.js server using Mocha and Supertest

In this example I test that the '/user' route returns an array of user objects, and that it includes me.

 ```javascript
 // /server/server.js

 app.get('/users', (req, res) => {
   res.send({
     users: [
       {name: 'Gabriel'},
       {name: 'Kelly'}
     ]
   });
 })

 // server/server.test.js
 it("should return an array of users", (done) => {
   request(app)
     .get('/users')
     .expect(200)
     .expect((res) => {
       expect(res.body.users).toInclude({
         name: 'Gabriel'
       });
     })
     .end(done)
 });
 ```
