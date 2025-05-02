import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.use(express.json());
app.get('/', (req, res) => {
    res.send('API Started');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server is running on port http://localhost:${PORT}/`);
});

