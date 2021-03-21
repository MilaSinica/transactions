/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_CUSTOMER,
  FETCH_CUSTOMERS,
  DELETE_CUSTOMER,
  UPDATE_CUSTOMER,
} from './../actions/index';
import _ from 'lodash';

const initialState = {};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case DELETE_CUSTOMER: {
      return _.omit(state, action.payload);
    }

    case FETCH_CUSTOMERS: {
      return _.mapKeys(action.payload.data, 'id');
    }

    case FETCH_CUSTOMER: {
      return { ...state, [action.payload.data.id]: action.payload.data };
    }

    case UPDATE_CUSTOMER: {
      return { ...state, [action.payload.data.id]: action.payload.data };
    }

    default:
      return state;
  }
}
