
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 4000;
app.use(cors());


// Homologação
app.get('/teste-wms', async (req, res) => {
  try {
    const response = await axios.head('http://testewms.cocatrel.com.br/login');
    res.json({
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/teste-wms-ip', async (req, res) => {
  try {
    const response = await axios.head('http://161.35.233.83/login');
    res.json({
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Produção
app.get('/wms-prod', async (req, res) => {
  try {
    const response = await axios.head('http://wms.cocatrel.com.br/login');
    res.json({
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/wms-prod-ip', async (req, res) => {
  try {
    const response = await axios.head('http://15.229.114.188/login');
    res.json({
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
