import React from 'react';
import Merchants from './Merchants';
import Customers from './Customers';

const Transactions = () => ( 
    <div>
        <h1>Transactions</h1> 
        <h3>By Merchants</h3> 
        <Merchants />
        <h3>By Customers</h3> 
        <Customers />
    </div>
);

export default Transactions;