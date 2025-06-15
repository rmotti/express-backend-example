import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './database/configdb.js';
import userRoute from './routes/user.route.js';
import exampleRoute from './routes/example.route.js';
import transactionRoute from './routes/transaction.route.js';

dotenv.config();
db.connect();

const app = express();

app.use(express.json());

// CORS
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://finsync-frontend.vercel.app'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Rotas
app.use("/users", userRoute);
app.use("/transactions", transactionRoute);
app.use("/secureExampleRoute", exampleRoute);

app.get('/', (req, res) => {
  res.send({ message: 'API Started' });
});

export default app;
