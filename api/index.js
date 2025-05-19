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

// Configuração de CORS
const corsOptions = {
  origin: [
    'http://localhost:3000', // Permite requisições locais durante o desenvolvimento
    'https://finsync-frontend.vercel.app' // Permite requisições do frontend na Vercel
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Rotas públicas
app.use("/users", userRoute);

// Rotas protegidas
app.use("/transactions", transactionRoute);
app.use("/secureExampleRoute", exampleRoute);

// Rota principal
app.get('/', (req, res) => {
  res.send({ message: 'API Started' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API server is running on port http://localhost:${PORT}/`);
});
