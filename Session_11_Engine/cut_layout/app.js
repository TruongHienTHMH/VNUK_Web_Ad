const express = require('express');
const app = express();
const path = require('path');
const pageRouter = require('./routes/pageRouter');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter);

app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);  
})