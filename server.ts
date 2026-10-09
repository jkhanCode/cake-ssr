import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT) || 3000;

const app = express();

// Serve the standalone static website files directly
app.use(express.static(__dirname));

// Fallback to index.html
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Cakelab Standalone Static Website running on http://0.0.0.0:${PORT}`);
});
