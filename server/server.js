require('./mongo/connections/connection');
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;
const routes = require('./routes/routes');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`)
  next()
});

routes(app);
  
app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});