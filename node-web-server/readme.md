# Creating Web Server with Express.js

In this repository I play around with Express.js and Handlebars

Here is an example of code inside this repository:

Server.js starts the server on a the environments port or on a port 3000 on a local machine.

The route '/' renders the home.hbs and passes pageTitle and welcomeMessage variables.

```javascript
// ./server.js
  const port = process.env.PORT || 3000;
  var app = express();

  handlebars.registerPartials(__dirname + '/views/partials');

  app.set('view engine', 'hbs');

  app.get('/', (req, res) => {
      res.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Welcome home!'
      });
  })

  app.listen(port, console.log(`Server Up on port ${port}`));
```

This is the handle bar file that gets rendered. It uses two Handlebar partials, header and footer.

```html
<!-- ./views/home.hbs -->
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home Page</title>
    </head>
    <body>
      {{> header}}
      <p>{{welcomeMessage}}</p>
      {{> footer}}
    </body>
  </html>
```

The handlebar footer partial that gets rendered above.

```html
<!-- ./views/partials/header.hbs -->
  <h1>{{pageTitle}}</h1>
  <p><a href="/">Home</a></p>
  <p><a href="/about">About</a></p>  

```
