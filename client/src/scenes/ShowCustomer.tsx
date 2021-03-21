import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCustomer, fetchMerchant } from '../actions';
import {formatAmount} from '../helpers/formatAmount';
import { Customer } from '../../../domainModels/customer';
import { Merchant } from '../../../domainModels/merchant';
import { Transaction } from '../../../domainModels/transaction';
import { TransactionList } from '../components/TransactionList';

type ShowCustomerProps = {
  fetchCustomer: any;
  fetchMerchant: any;
  customer: Customer;
  merchant: Merchant;
  match: any;
  history: any;
  merchants: Merchant[];
}

function ShowCustomer({ fetchCustomer, fetchMerchant, customer, match, merchant }: ShowCustomerProps) {
    useEffect(() => {
        const id = match.params.id;
        if(!customer) fetchCustomer(id);
    }, [fetchCustomer, customer, match.params.id]);

    useEffect(() => {
      const merchantId = customer ? customer.merchantId : undefined;
      if(merchantId) fetchMerchant(merchantId);
  }, [customer, fetchMerchant]);


  let total = '0';

    if(!customer) return (
      <>
                <Link to="/">Back</Link>
      <p>Customer not found</p>
</>
    );

    const renderTransactions = () => {
      if(merchant) {
        const customerTransactions = merchant.transactions.filter((tr: Transaction) => tr.customerId === customer.id);
        const transactionTotal = customerTransactions.reduce((acc: number, tr: Transaction): number => tr.amount + acc, 0);
        total = formatAmount(transactionTotal);
        return <TransactionList transactions={customerTransactions} />
    } else {
      return <p>No transactions</p>
    }
  }

    return (
      <div>
          <Link to="/">Back</Link>
          <h1>{customer.name}</h1>
          <p>Merchant: {merchant ? <Link to={`/merchants/${merchant.id}`}>{merchant.name}</Link> : "-"}</p>
          <p>Currency: {merchant?.currency}</p>
          
          {renderTransactions()}
          <h4 style={{marginTop: '2rem', color: 'blue'}}>Total amount: ${total}</h4>
      </div>
    );
  }

  function mapStateToProps(state: any, ownProps: any) {
    return { customer: state.customers[ownProps.match.params.id], merchant: state.merchants[state.customers[ownProps.match.params.id]?.merchantId]};
  }

export default connect(mapStateToProps, { fetchMerchant, fetchCustomer })(ShowCustomer);

