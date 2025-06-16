import express from 'express';
import transactionController from '../controller/transaction.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';



const router = express.Router();

// Rotas protegidas por autenticação
router.post('/', verifyToken, transactionController.createTransaction);
router.get('/', verifyToken, transactionController.getAllTransactions);
router.get('/:id', verifyToken, transactionController.getTransactionById);
router.put('/:id', verifyToken, transactionController.updateTransaction);
router.patch('/:id', verifyToken, transactionController.partialUpdateTransaction);
router.delete('/:id', verifyToken, transactionController.deleteTransaction);

export default router;