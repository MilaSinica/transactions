import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCustomer } from '../actions';
import { CreateCustomerDto } from '../../../dto/create-customer.dto';

type NewCustomerProps = {
    handleSubmit: any;
    createCustomer: any;
    history?: any;
}

function NewCustomer({ handleSubmit, createCustomer, history }: NewCustomerProps) {
    const CustomField = ({label, meta, input}: {input: any, meta: any, label: string}) => {
        const {touched, error} = meta;
        const errorMsg = touched && error;
        return (
            <div className="form-group">
                <label>{label}</label>
                <input 
                    type="text"
                    className={`form-control ${errorMsg ? 'is-invalid' : ''}`}
                    {...input}
                />
                { touched && <div className="invalid-feedback">{errorMsg}</div> }
            </div>
        )
    }

    const onSubmit = (values: CreateCustomerDto) => {
        createCustomer(values, () => history.push('/'));
    }

    return (
      <div>
        <Link to="/">Back</Link>
          <h3>Create New Customer</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Field 
                name='name'
                label="Name"
                component={CustomField}
              />
              <Field 
                name='merchantId'
                label="Merchant Id"
                component={CustomField}
              />
              <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Create</button>
              <Link className="btn btn-secondary" to="/">Cancel</Link>
          </form>
      </div>
    );
  }

const validate = (formValues: CreateCustomerDto) => {
    const errors = {} as {name: string, merchantId: string};
    if(!formValues.name) {
        errors.name = "You must enter a name";
    }
    if(!formValues.merchantId) {
        errors.merchantId = "You must enter a merchant";
    }
    return errors;
}

export default reduxForm({
    form: 'NewCustomerForm',
    validate
})(
    connect(null, {createCustomer})(NewCustomer)
);
