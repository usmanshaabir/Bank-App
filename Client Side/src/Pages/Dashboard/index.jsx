import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardNav from './DashboardNav';
import Accounts from './Accounts';
import Transaction from './Transactions';

export default function index() {
  return (
    <>
      <DashboardNav />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='accounts' element={<Accounts />} />
        <Route path='transaction' element={<Transaction />} />
      </Routes>
    </>
  )
}
