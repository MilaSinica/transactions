/* eslint-disable import/no-anonymous-default-export */
import { FETCH_MERCHANTS, FETCH_MERCHANT } from '../actions/index';
import _ from 'lodash';

const initialState = {};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case FETCH_MERCHANTS: {
      return _.mapKeys(action.payload.data, 'id');
    }

    case FETCH_MERCHANT: {
      return { ...state, [action.payload.data.id]: action.payload.data };
    }

    default:
      return state;
  }
}
