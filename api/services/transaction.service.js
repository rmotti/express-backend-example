import Transaction from '../models/Transaction.js';

const createTransaction = async (transactionData, userId) => {
    if (!transactionData.title) {
        throw { status: 400, message: 'Title is required' };
    }

    const transaction = new Transaction({
        ...transactionData,
        userId
    });

    return await transaction.save();
};

const getAllTransactions = async (userId) => {
    return await Transaction.find({ userId });
};

const getTransactionById = async (id, userId) => {
    const transaction = await Transaction.findOne({ _id: id, userId });
    if (!transaction) {
        throw { status: 404, message: 'Transaction not found' };
    }
    return transaction;
};

const updateTransaction = async (id, userId, updateData) => {
    if (updateData.title === '') {
        throw { status: 400, message: 'Title cannot be empty' };
    }

    const transaction = await Transaction.findOneAndUpdate(
        { _id: id, userId },
        updateData,
        { new: true, runValidators: true }
    );

    if (!transaction) {
        throw { status: 404, message: 'Transaction not found' };
    }

    return transaction;
};

const deleteTransaction = async (id, userId) => {
    const transaction = await Transaction.findOneAndDelete({ _id: id, userId });
    if (!transaction) {
        throw { status: 404, message: 'Transaction not found' };
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