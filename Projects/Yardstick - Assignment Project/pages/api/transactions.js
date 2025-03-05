// /pages/api/transactions.js
import connectDB from '../../lib/db';
import Transaction from '../../models/Transaction';

connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const transactions = await Transaction.find({});
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch transactions' });
    }
  }

  if (req.method === 'POST') {
    const { amount, description, category } = req.body;
    try {
      const newTransaction = new Transaction({
        amount,
        description,
        category,
      });
      await newTransaction.save();
      res.status(201).json(newTransaction);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add transaction' });
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    try {
      await Transaction.findByIdAndDelete(id);
      res.status(200).json({ message: 'Transaction deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete transaction' });
    }
  }
}
