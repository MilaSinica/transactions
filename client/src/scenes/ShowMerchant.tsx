import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMerchant } from '../actions';
import { Merchant } from '../../../domainModels/merchant';
import {TransactionList} from '../components/TransactionList';


type ShowMerchantProps = {
  fetchMerchant: any;
  merchant: Merchant;
  match: any;
  history: any;
}

function ShowMerchant({ fetchMerchant, merchant, match }: ShowMerchantProps) {
    useEffect(() => {
        const id = match.params.id;
        if(!merchant) fetchMerchant(id);
    }, [fetchMerchant, merchant, match.params.id]);


    if(!merchant) return null;

    return (
      <div>
          <Link to="/">Back</Link>
          <h1>{merchant.name}</h1>
          <p style={{color: merchant.isTrading ? 'green' : 'red'}}>{merchant.isTrading ? 'Is Trading' : 'Not Trading'}</p>
          <p>Currency: {merchant.currency}</p>
          <TransactionList transactions={merchant.transactions} showCustomer={true} />
          <Link to={`/merchants/${merchant.id}/new`}>Add a Customer</Link> 
      </div>
    );
  }

  function mapStateToProps({ merchants }: Record<any, any>, ownProps: any) {
      return {
          merchant: merchants[ownProps.match.params.id]
      }
  }

export default connect(mapStateToProps, { fetchMerchant })(ShowMerchant);

