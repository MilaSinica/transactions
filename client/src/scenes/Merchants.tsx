import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchMerchants } from '../actions';
import { Merchant } from '../../../domainModels/merchant';

function Merchants({ fetchMerchants, merchants }: { fetchMerchants: any, merchants: Merchant[] }) {
    useEffect(() => {
        fetchMerchants();
    }, [fetchMerchants]);

    const renderMerchants = () => _.map(merchants, mer => {
        return ( <li
            key = { mer.id }
            style = {
                { backgroundColor: '#f0f0f0' }
            } >
            <Link to = {`/merchants/${mer.id}` }> { mer.name } </Link> 
            </li >
        )
    })

    return ( <div>
            <ul
            style = {
                { marginTop: '20px' }
            }> 
            { renderMerchants() } 
            </ul> 
        </div>
    );
}

function mapStateToProps(state: any) {
    return {
        merchants: state.merchants
    }
}

export default connect(mapStateToProps, { fetchMerchants })(Merchants);