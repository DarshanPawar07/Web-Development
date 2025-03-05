 
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/TransactionForm.module.css';


export default function TransactionForm({ onSubmit, initialValues = {} }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [transaction, setTransaction] = useState(initialValues);

  useEffect(() => {
    reset(transaction);
  }, [transaction, reset]);

  const handleFormSubmit = async (data) => {
    await onSubmit(data);
    reset(); // Reset form after successful submission
  };

  return (
    
    <div className={styles.container}>
      <h2>{transaction._id ? 'Edit Transaction' : 'Add New Transaction'}</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            step="0.01"
            {...register('amount', { required: 'Amount is required' })}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            {...register('description', { required: 'Description is required' })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            {...register('category', { required: 'Category is required' })}
          />
          {errors.category && <p>{errors.category.message}</p>}
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <div>
          <button type="submit">{transaction._id ? 'Update Transaction' : 'Add Transaction'}</button>
        </div>
      </form>
    </div>
  );
}
