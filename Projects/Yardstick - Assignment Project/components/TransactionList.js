 
import styles from '../styles/TransactionList.module.css';

export default function TransactionList({ transactions }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Transaction List</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.amount}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
