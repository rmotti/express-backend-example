import Transaction from '../models/Transaction.js';

const createTransaction = async (transactionData, userId) => {
  try {
    console.log('🟡 Dados recebidos no serviço:', transactionData, userId);

    const { title, amount, type, category } = transactionData;

    if (!title || !amount || !type || !category) {
      throw { status: 400, message: 'Campos obrigatórios: title, amount, type e category.' };
    }

    const transaction = new Transaction({
      ...transactionData,
      userId,
    });

    const saved = await transaction.save();
    console.log('✅ Transação salva:', saved);
    return saved;

  } catch (err) {
    console.error('❌ Erro no serviço de transação:', err);
    throw err;
  }
};

const getAllTransactions = async (userId) => {
  return await Transaction.find({ userId }).sort({ date: -1 }); 
};

const getTransactionById = async (id, userId) => {
  const transaction = await Transaction.findOne({ _id: id, userId });
  if (!transaction) {
    throw { status: 404, message: 'Transação não encontrada' };
  }
  return transaction;
};

const updateTransaction = async (id, userId, updateData) => {
  if (updateData.title !== undefined && updateData.title.trim() === '') {
    throw { status: 400, message: 'O título não pode estar vazio' };
  }

  const transaction = await Transaction.findOneAndUpdate(
    { _id: id, userId },
    updateData,
    { new: true, runValidators: true }
  );

  if (!transaction) {
    throw { status: 404, message: 'Transação não encontrada' };
  }

  return transaction;
};

const deleteTransaction = async (id, userId) => {
  const transaction = await Transaction.findOneAndDelete({ _id: id, userId });
  if (!transaction) {
    throw { status: 404, message: 'Transação não encontrada' };
  }
  return transaction;
};

export default {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
};
