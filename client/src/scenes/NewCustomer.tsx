import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCustomer } from '../actions';
import Input from '../components/Input';
import { CreateCustomerDto } from '../../../dto/create-customer.dto';

type NewCustomerProps = {
    handleSubmit: any;
    createCustomer: any;
    history?: any;
    match?: any;
}

function NewCustomer({ handleSubmit, createCustomer, history, match }: NewCustomerProps) {
    const merchantId = match.params.id;

    const onSubmit = (values: CreateCustomerDto) => {
        createCustomer({name: values.name, merchantId}, () => history.push('/'));
    }

    return (
      <div>
        <Link to="/">Back</Link>
          <h3>Create New Customer</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
              <Field 
                name='name'
                label="Name"
                component={Input}
              />
            <div style={{marginTop: '1rem'}}>
              <button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Create</button>
              <Link className="btn btn-secondary" to="/">Cancel</Link>
            </div>
          </form>
      </div>
    );
  }

const validate = (formValues: CreateCustomerDto) => {
    const errors = {} as {name: string, merchantId: string};
    if(!formValues.name) {
        errors.name = "You must enter a name";
    }
    return errors;
}

export default reduxForm({
    form: 'NewCustomerForm',
    validate
})(
    connect(null, {createCustomer})(NewCustomer)
);
