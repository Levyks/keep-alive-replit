const express = require('express');

const app = express();

app.get('/keep-alive', (req, res) => {
  res.send(
    'There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory mentioned, which states that this has already happened'
  );
});

module.exports = app;