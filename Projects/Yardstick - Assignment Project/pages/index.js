 
import { useEffect, useState } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Dashboard from '../components/Dashboard';
import CategoryChart from '../components/CategoryChart';
import BudgetChart from '../components/BudgetChart';

export default function Home() {
  const [transactions, setTransactions] = useState([]);
  const [budgetData, setBudgetData] = useState([{ name: 'Groceries', value: 500 }, { name: 'Entertainment', value: 200 }]);

  useEffect(() => {
    // Fetch transactions on page load
    fetch('/api/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleAddTransaction = async (transaction) => {
    const response = await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(transaction),
      headers: { 'Content-Type': 'application/json' },
    });
    const newTransaction = await response.json();
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = async (id) => {
    await fetch(`/api/transactions?id=${id}`, { method: 'DELETE' });
    setTransactions(transactions.filter((transaction) => transaction._id !== id));
  };

  return (
    <div>
      <TransactionForm onSubmit={handleAddTransaction} />
      <Dashboard transactions={transactions} />
      <CategoryChart transactions={transactions} />
      <BudgetChart budgetData={budgetData} actualData={transactions} />
      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
    </div>
  );
}
