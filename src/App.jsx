import React, { useState } from 'react'
import './App.css'

function App() {
  const [balance] = useState(1247.89)
  const [transactions] = useState([
    { id: 1, name: 'John Doe', amount: -50.00, date: 'Today', type: 'sent' },
    { id: 2, name: 'Sarah Smith', amount: 25.00, date: 'Yesterday', type: 'received' },
    { id: 3, name: 'Mike Johnson', amount: -15.00, date: '2 days ago', type: 'sent' },
    { id: 4, name: 'Emily Davis', amount: 100.00, date: '3 days ago', type: 'received' },
  ])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Math.abs(amount))
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">$</div>
          <div className="header-actions">
            <button className="icon-button">⚙️</button>
            <button className="icon-button">💬</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="balance-section">
          <div className="balance-label">Balance</div>
          <div className="balance-amount">{formatCurrency(balance)}</div>
        </div>

        <div className="action-buttons">
          <button className="action-btn send-btn">
            <div className="btn-icon">↑</div>
            <div className="btn-label">Send</div>
          </button>
          <button className="action-btn receive-btn">
            <div className="btn-icon">↓</div>
            <div className="btn-label">Request</div>
          </button>
        </div>

        <div className="transactions-section">
          <div className="section-header">
            <h2>Recent Activity</h2>
            <button className="view-all-btn">View All</button>
          </div>
          
          <div className="transactions-list">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-avatar">
                  {transaction.name.charAt(0)}
                </div>
                <div className="transaction-details">
                  <div className="transaction-name">{transaction.name}</div>
                  <div className="transaction-date">{transaction.date}</div>
                </div>
                <div className={`transaction-amount ${transaction.type}`}>
                  {transaction.type === 'sent' ? '-' : '+'}
                  {formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <nav className="bottom-nav">
        <button className="nav-item active">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">💳</span>
          <span className="nav-label">Card</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📊</span>
          <span className="nav-label">Investing</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">⚡</span>
          <span className="nav-label">Activity</span>
        </button>
      </nav>
    </div>
  )
}

export default App

