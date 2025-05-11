import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoute from './routes/user.route.js';
import exampleRoute from './routes/example.route.js';
import transactionRoute from './routes/transaction.route.js';

dotenv.config();
db.connect();

const app = express();

app.use(express.json());

// Rotas públicas
app.use("/users", userRoute);

// Rotas protegidas
app.use("/transactions", transactionRoute);
app.use("/secureExampleRoute", exampleRoute);

app.get('/', (req, res) => {
    res.send({message:'API Started'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server is running on port http://localhost:${PORT}/`);
});