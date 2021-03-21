import { UpdateCustomerDto } from '../../../dto/update-customer.dto';
import { CreateCustomerDto } from '../../../dto/create-customer.dto';
import customersApi from '../api/customersApi';
import merchantApi from '../api/merchantApi';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const FETCH_MERCHANTS = 'FETCH_MERCHANTS';
export const FETCH_MERCHANT = 'FETCH_MERCHANT';

export function fetchCustomers() {
  const request = customersApi.get(``);

  return {
    type: FETCH_CUSTOMERS,
    payload: request,
  };
}

export function fetchCustomer(id: string) {
  const request = customersApi.get(`/${id}`);

  return {
    type: FETCH_CUSTOMER,
    payload: request,
  };
}

export function createCustomer(
  customer: CreateCustomerDto,
  callback: () => void,
) {
  const request = customersApi.post(``, customer).then(() => callback());

  return {
    type: CREATE_CUSTOMER,
    payload: request,
  };
}

export function updateCustomer(
  id: string,
  customer: UpdateCustomerDto,
  callback: () => void,
) {
  const request = customersApi.put(`/${id}`, customer).then(() => callback());

  return {
    type: UPDATE_CUSTOMER,
    payload: request,
  };
}

export function deleteCustomer(id: string, callback: () => void) {
  customersApi.delete(`/${id}`).then(() => callback());

  return {
    type: DELETE_CUSTOMER,
    payload: id,
  };
}

export function fetchMerchants() {
  const request = merchantApi.get(``);

  return {
    type: FETCH_MERCHANTS,
    payload: request,
  };
}

export function fetchMerchant(id: string) {
  const request = merchantApi.get(`/${id}`);

  return {
    type: FETCH_MERCHANT,
    payload: request,
  };
}
