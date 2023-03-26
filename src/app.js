const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const apiUrl = 'https://yesno.wtf/api';

app.set('port', process.env.PORT || 3000);

app.get('/random', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const { answer } = response.data;

    if (answer === 'yes') {
      res.status(200).json({ result: true });
    } else if (answer === 'no') {
      res.status(200).json({ result: false });
    } else {
      res.status(500).json({ result: false });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).json({ result: false });
  }
});

app.get('/healthz', async (req, res) => {
  try {
    await axios.get(apiUrl);
    res.status(200);
    return true;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500);
    return false;
  }
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${app.get('port')}`);
});
