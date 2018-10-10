const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
 
 
const exec = () => {
  const app = express();

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const PORT = process.env.PORT || 8081;

  app.post('/api/hello', (req, res) => {
    const { hello } = req.body;
    const helloNew = `${hello}!`;
    res.status(200).send(helloNew);
  });
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Server is running at port:${PORT}`);
    }
  });
};
exec();
