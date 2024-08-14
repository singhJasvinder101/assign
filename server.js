const express = require('express');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api', categoryRoutes);
app.use('/api', subCategoryRoutes);
app.use('/api', itemRoutes);


mongoose.connect('mongodb://localhost:27017/menuDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Menu Management API'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
