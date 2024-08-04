import React, { useState } from 'react'

const TransactionForm = ({ onAddTransaction }) => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { id: Date.now(), date, description, category, amount: parseFloat(amount) };

        onAddTransaction(newTransaction);
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('')
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type='date' value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
            <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />

            <button type='submit'>Add Transaction</button>
        </form>
    );
}

export default TransactionForm;