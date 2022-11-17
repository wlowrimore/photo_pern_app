require('dotenv').config()
const express = require('express');
const db = require('./db');

const app = express();

// middleware
app.use(express.json());


// ------------------------------------- ROUTES ------------------------------------= //


// Get all photos

app.get('/photos', async (req, res) => {

  const results = await db.query('SELECT * FROM photo')
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      photo: ["Will", "Nikki", "Tripp", "Maya", "Joel 'the vat'"],
    }
  })
});

// Get photo by id

app.get('/photos/:id', (req, res) => {
  res.status(200).json({
    status: 'success'
  })
});

// Create a photo

app.post('/photos', (req, res) => {
  res.status(200).json({
    status: 'success'
  })
});

// Update a photo

app.put('/photos/:id', (req, res) => {
  res.status(200).json({
    status: 'success'
  })
});

// Delete a photo

app.delete('/photo/:id', (req, res) => {
  res.status(200).json({
    status: 'success'
  })
});





// Server Connection

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});