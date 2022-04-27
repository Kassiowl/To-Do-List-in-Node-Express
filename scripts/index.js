const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
var helmet = require('helmet');

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static('view'))



app.all('*', (req, res) => {
    res.status(404).send('Sorry, resource not found in this address');
})
  

app.listen(port, ()=>
{
    console.log(`Server Listening on port ${port}`);
})