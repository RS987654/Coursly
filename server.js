import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/images', express.static('images'));

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
