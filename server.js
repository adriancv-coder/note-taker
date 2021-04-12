const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;
const jsonObject = require("./public/notes.json")

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

app.get('/api/notes', (req, res) => {
  res.json(jsonObject)
})

// create a post route to make new note
app.post('/api/notes', (req, res) => {
  res.json('POST');
});
//ceate delete route to delete note
app.delete('/api/notes/:id', (req, res) => {
  console.log(req.params)
  res.json('DELETE');
});


  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });