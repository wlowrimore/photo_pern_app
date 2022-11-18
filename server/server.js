require('dotenv').config()
const express = require('express');
const db = require('./db');

const app = express();

// middleware
app.use(express.json());


// ------------------------------------- ROUTES ------------------------------------= //


// Get all photos

app.get('/photos', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM photo')
    console.log(results);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        photo: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Get photo by id

app.get('/photos/:id', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM photo WHERE photo_id = $1', [req.params.id]);
    console.log(req.body);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        photo: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Create a photo

app.post('/photos', async (req, res) => {
  try {
    const results = await db.query('INSERT INTO photo (title, description) values ($1, $2) RETURNING *', [
      req.body.title, req.body.description] )
    console.log(req.body);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        photo: results.rows[0],
      },
    });    
  } catch (err) {
    console.log(err);
  }
});

// Update a photo

app.put('/photos/:id', async (req, res) => {
  try {
    const results = await db.query('UPDATE photo SET title = $1, description = $2 WHERE photo_id = $3 RETURNING *', [
      req.body.title, req.body.description, req.params.id] )
      console.log(req.body);
      res.status(200).json({
        status: 'success',
        results: results.rows.length,
        data: {
          photo: results.rows[0],
        }
      })
  } catch (err) {
    console.log(err);
  }
});

// Delete a photo

app.delete('/photo/:id', async (req, res) => {
  try {
    const results = await db.query('DELETE FROM photo WHERE photo_id = $1', [req.params.id] )
    console.log(req.body);
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    console.log(err);
  }
});





// Server Connection

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});