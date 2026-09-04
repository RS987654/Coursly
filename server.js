import express from 'express';
import ejs from 'ejs';

app.set('view engine', 'ejs');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});