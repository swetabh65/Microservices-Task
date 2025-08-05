const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// ✅ This should match the port defined in docker-compose.yml
const port = 3003;

app.get('/health', (req, res) => {
  res.json({ status: 'Gateway Service is healthy' });
});

// ✅ Corrected ports based on docker-compose.yml
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('http://user-service:3001/users');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('http://product-service:3002/products');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const response = await axios.get('http://order-service:3003/orders');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const response = await axios.post('http://order-service:3003/orders', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error creating order' });
  }
});

app.listen(port, () => {
  console.log(`✅ Gateway service running on port ${port}`);
});
