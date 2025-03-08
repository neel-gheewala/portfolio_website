const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Homepage Route
app.get('/', (req, res) => {
    res.render('index', { name: 'Neel', title: 'Welcome to My Portfolio' });
});

// About Page Route
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me', description: 'I am a passionate developer learning new technologies.' });
});

// Contact Page Route
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me', email: 'contact@neel.com' });
});

app.listen(port, () => {
    console.log(`Portfolio website is running at http://localhost:${port}`);
});
