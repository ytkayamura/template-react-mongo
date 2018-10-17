const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const moment = require('moment-timezone');
const LastPushedDate = require('./models/lastPushedDate');

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
  app.post('/api/push', async (req, res) => {
    try {
      await LastPushedDate.updateOne({}, { lastDate: new Date() }, { upsert: true });
      const result = await LastPushedDate.findOne({});
      res.status(200).send(moment(result.lastDate).tz('Asia/Tokyo').format());
    } catch (e) {
      console.log(e);
      res.status(500).send();
    }
  });
  app.get('/api/pushed', async (req, res) => {
    try {
      const result = await LastPushedDate.findOne({});
      res.status(200).send(moment(result.lastDate).tz('Asia/Tokyo').format());
    } catch (e) {
      console.log(e);
      // –¢pushŽž‚É³í‚Å•Ô‚·B
      res.status(200).send('');
    }
  });
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Server is running at port:${PORT}`);
      const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/template-react-express';
      mongoose.connect(dbUrl, { useNewUrlParser: true });
    }
  });
};
exec();
