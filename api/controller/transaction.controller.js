import transactionService from '../services/transaction.service.js';

const createTransaction = async (req, res) => {
  try {
    console.log('➡️ Requisição recebida:', req.body);
    console.log('🟡 Token decodificado userId:', req.userId);

    const transaction = await transactionService.createTransaction(req.body, req.userId);

    return res.status(201).json(transaction);
  } catch (error) {
    console.error('❌ ERRO NA CRIAÇÃO:', error); // Adicione isso!
    return res.status(error.status || 500).json({
      message: error.message || 'Erro interno no servidor'
    });
  }
};



const getAllTransactions = async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions(req.userId);
        res.json(transactions);
    } catch (error) {
        res.status(error.status || 500).json({ 
            message: error.message || 'Internal server error' 
        });
    }
};

const getTransactionById = async (req, res) => {
    try {
        const transaction = await transactionService.getTransactionById(
            req.params.id, 
            req.userId
        );
        res.json(transaction);
    } catch (error) {
        res.status(error.status || 500).json({ 
            message: error.message || 'Internal server error' 
        });
    }
};

const updateTransaction = async (req, res) => {
    try {
        const updatedTransaction = await transactionService.updateTransaction(
            req.params.id,
            req.userId,
            req.body
        );
        res.json(updatedTransaction);
    } catch (error) {
        res.status(error.status || 500).json({ 
            message: error.message || 'Internal server error' 
        });
    }
};

const partialUpdateTransaction = async (req, res) => {
    try {
        // Remove campos que não podem ser atualizados
        const { _id, userId, ...updateData } = req.body;
        
        const updatedTransaction = await transactionService.updateTransaction(
            req.params.id,
            req.userId,
            updateData
        );
        res.json(updatedTransaction);
    } catch (error) {
        res.status(error.status || 500).json({ 
            message: error.message || 'Internal server error' 
        });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        await transactionService.deleteTransaction(req.params.id, req.userId);
        res.status(204).send();
    } catch (error) {
        res.status(error.status || 500).json({ 
            message: error.message || 'Internal server error' 
        });
    }
};

export default {
    createTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    partialUpdateTransaction,
    deleteTransaction
};