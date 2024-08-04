import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionsList from './components/TransactionsList';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </>
  );
}

export default App;
