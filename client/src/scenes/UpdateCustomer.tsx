import React, { useEffect } from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCustomer, deleteCustomer, updateCustomer } from '../actions';
import { Customer } from '../../../domainModels/customer';
import Input from '../components/Input';
import { UpdateCustomerDto } from '../../../dto/update-customer.dto';

type UpdateCustomerProps = {
  fetchCustomer: any;
  deleteCustomer: any;
  customer: Customer;
  match: any;
  history: any;
  handleSubmit: (values: any) => any;
}

function UpdateCustomer({ fetchCustomer, deleteCustomer, customer, match, history , handleSubmit}: UpdateCustomerProps) {
    useEffect(() => {
        const id = match.params.id;
        if(!customer) fetchCustomer(id);
    }, [fetchCustomer, customer, match.params.id]);


    const onCustomerDelete = () => {
      const id = match.params.id;
      deleteCustomer(id, () => history.push('/'));
    }

    if(!customer) return null;

    const onSubmit = (values: UpdateCustomerDto) => {
      updateCustomer(customer.id, values, () => history.push('/'));
  }

    return (
      <div>
          <Link to="/">Back</Link>
          <br/>
          <h1>{customer.name}</h1>

          <Form onSubmit={handleSubmit(onSubmit)}>
              <Field 
                name='name'
                label="Name"
                component={(props: any) => <Input {...props} value={customer.name} />}
              />
              <br/>
              <Field 
                name='merchantId'
                label="Merchant Id"
                component={(props: any) => <Input {...props} value={customer.merchantId} />}
              />
              <div style={{marginTop: '1rem'}}>
              <button type="submit" style={{marginRight: '10px'}}>Update</button>
              <button type="submit" onClick={onCustomerDelete}>Delete</button>
              <Link to="/" style={{marginLeft: '1rem'}}>Cancel</Link>
              </div>
          </Form>

      </div>
    );
  }

  const validate = (formValues: UpdateCustomerDto) => {
    const errors = {} as {name: string, merchantId: string};
    if(!formValues.name) {
        errors.name = "You must enter a name";
    }
    if(!formValues.merchantId) {
        errors.merchantId = "You must enter a merchant";
    }
    return errors;
}

  function mapStateToProps({ customers }: Record<any, any>, ownProps: any) {
      return {
          customer: customers[ownProps.match.params.id]
      }
  }

export default reduxForm({
    form: 'UpdateCustomerForm',
    validate
})(
    connect(mapStateToProps, {fetchCustomer, deleteCustomer})(UpdateCustomer)
);

