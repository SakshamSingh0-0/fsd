import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import os from 'os';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/data', (req, res) => {
  res.json({ 
    message: 'Hello from backend!',
    timestamp: new Date(),
    status: 'success'
  });
});

// Post route to receive data from frontend
app.post('/api/submit', (req, res) => {
  console.log('Received data:', req.body);
  res.json({ 
    status: 'success',
    message: 'Data received successfully',
    data: req.body
  });
});

// Get all items (sample)
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item 1', description: 'First item' },
    { id: 2, name: 'Item 2', description: 'Second item' },
    { id: 3, name: 'Item 3', description: 'Third item' }
  ];
  res.json(items);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// System Information Routes
app.get('/api/system/total-memory', (req, res) => {
  const totalMemory = os.totalmem();
  const totalMemoryGB = (totalMemory / (1024 ** 3)).toFixed(2);
  res.json({
    status: 'success',
    totalMemory: totalMemory,
    totalMemoryGB: `${totalMemoryGB} GB`,
    totalMemoryMB: `${(totalMemory / (1024 ** 2)).toFixed(2)} MB`,
    timestamp: new Date()
  });
});

app.get('/api/system/free-memory', (req, res) => {
  const freeMemory = os.freemem();
  const freeMemoryGB = (freeMemory / (1024 ** 3)).toFixed(2);
  res.json({
    status: 'success',
    freeMemory: freeMemory,
    freeMemoryGB: `${freeMemoryGB} GB`,
    freeMemoryMB: `${(freeMemory / (1024 ** 2)).toFixed(2)} MB`,
    timestamp: new Date()
  });
});

app.get('/api/system/user-info', (req, res) => {
  const userInfo = os.userInfo();
  res.json({
    status: 'success',
    username: userInfo.username,
    uid: userInfo.uid,
    gid: userInfo.gid,
    homeDir: userInfo.homedir,
    shell: userInfo.shell,
    timestamp: new Date()
  });
});

app.get('/api/system/cpu-architecture', (req, res) => {
  const cpus = os.cpus();
  res.json({
    status: 'success',
    architecture: os.arch(),
    platform: os.platform(),
    cpuCount: cpus.length,
    cpuModel: cpus[0]?.model || 'N/A',
    cpuSpeed: cpus[0]?.speed ? `${cpus[0].speed} MHz` : 'N/A',
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📍 API endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/data`);
  console.log(`   GET  http://localhost:${PORT}/api/items`);
  console.log(`   POST http://localhost:${PORT}/api/submit`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`📊 System Info endpoints:`);
  console.log(`   GET  http://localhost:${PORT}/api/system/total-memory`);
  console.log(`   GET  http://localhost:${PORT}/api/system/free-memory`);
  console.log(`   GET  http://localhost:${PORT}/api/system/user-info`);
  console.log(`   GET  http://localhost:${PORT}/api/system/cpu-architecture`);
});
