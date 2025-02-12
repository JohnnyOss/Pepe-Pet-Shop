require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');
const categoriesRoutes = require('./routes/categories.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);
app.use('/api', categoriesRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ product: 'Not found...' });
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* MONGOOSE */
mongoose.connect(`mongodb+srv://${process.env.userApp}:${process.env.passwordApp}@cluster0.0a7ql.mongodb.net/PepesPetShop?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});