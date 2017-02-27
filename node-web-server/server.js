const express = require('express');
const handlebars = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

handlebars.registerPartials(__dirname + '/views/partials');
handlebars.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

handlebars.registerHelper('screamIt', (text) => {
  return text.toUpperCase()
})

app.set('view engine', 'hbs');

app.use((req, res, next) => {
  const now = new Date().toString();
  let log = `${now} ${req.method} ${req.url}`
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
    }
  });
  next();
});

// For use when Website is under maintenance

// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'Maintenance'
//   })
// });

app.use((req, res, next) => {
  var now = new Date().toString();
  let log = `${now} ${req.method} ${req.url}`
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});



app.get('/', (req, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home',
      welcomeMessage: 'Welcome home!'
    });
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects Page'
  });
})


app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  })
})

app.listen(port, console.log(`Server Up on port ${port}`));
