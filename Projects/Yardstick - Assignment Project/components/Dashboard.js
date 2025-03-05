 
import { useEffect, useState } from 'react';

export default function Dashboard({ transactions }) {
  const totalExpenses = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const categories = transactions.reduce((acc, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
    return acc;
  }, {});

  return (
    <div>
      <div>Total Expenses: ${totalExpenses}</div>
      <div>
        {Object.entries(categories).map(([category, amount]) => (
          <div key={category}>
            {category}: ${amount}
          </div>
        ))}
      </div>
    </div>
  );
}
