import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchCustomers } from '../actions';
import { Customer } from '../../../domainModels/customer';

function Customers({ fetchCustomers, customers }: { fetchCustomers: any, customers: Customer[] }) {
    useEffect(() => {
        fetchCustomers();
    }, [fetchCustomers]);

    const renderCustomers = () => _.map(customers, cust => {
        return ( <li
            key = { cust.id }
            style = {
                { backgroundColor: '#f0f0f0' }
            } >
            <Link to = {`/customers/${cust.id}` }> { cust.name } </Link> 
            </li >
        )
    })

    return ( <div>
            <ul
            style = {
                { marginTop: '20px' }
            }> 
            { renderCustomers() } 
            </ul> 
        </div>
    );
}

function mapStateToProps(state: any) {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps, { fetchCustomers })(Customers);