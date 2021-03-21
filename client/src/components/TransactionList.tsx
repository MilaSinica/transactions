import React from 'react';
import { Link } from 'react-router-dom';
import { Transaction } from '../../../domainModels/transaction';
import { formatAmount } from '../helpers/formatAmount';
import _ from 'lodash';


type TransactionListProps = {
  transactions: Transaction[];
  showCustomer?: boolean;
}

export const TransactionList = ({transactions, showCustomer = false}: TransactionListProps) => (
    <ul>{
        _.map  (transactions, tr => {
    return ( <li
        key = { tr.id }
        style = {
            { backgroundColor: '#f0f0f0' }
        }>
            <h4>Transaction: {tr.id}, {tr.description}</h4>
            <hr />
            <p>Amount: ${formatAmount(tr.amount)}. {showCustomer && <Link to={`/customers/${tr.customerId}`}>Customer: {tr.customerId}</Link>}</p>
            
        </li >
    )
        })
    }
        </ul>
)
export default TransactionList;
