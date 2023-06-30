const express = require('express');
const app = express();

// Middleware to check working hours
const checkWorkingHours = (req, res, next) => {
  const currentTime = new Date();
  const dayOfWeek = currentTime.getDay();
  const hour = currentTime.getHours();

  // Monday to Friday (0-6 represents Sunday to Saturday)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Working hours from 9 to 17
    if (hour >= 9 && hour <= 17) {
      next(); // Proceed to the next middleware/route handler
    } else {
      res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
  } else {
    res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
};

// Set the view engine to use a template engine (e.g., EJS)
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Apply the checkWorkingHours middleware to all routes
app.use(checkWorkingHours);

// Define routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
