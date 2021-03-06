import Axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAll = ({products}) => products.data;
export const getOneProduct = ({products}) => products.oneProduct;
export const getCart = ({products}) => products.cart;
export const getOneProductFromCart = ({products}, id) => products.cart.find(item => item.id === id);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const EDIT_IN_CART = createActionName('EDIT_IN_CART');
const DELETE_FROM_CART = createActionName('DELETE_FROM_CART');
const FETCH_ONE = createActionName('FETCH_ONE');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const editInCart = payload => ({ payload, type: EDIT_IN_CART});
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART});
export const fetchOne = payload => ({ payload, type: FETCH_ONE });

/* thunk creators */

export const fetchAllProducts = () => {
  return(dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/products`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });

  };
};

export const fetchOneProduct = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/products/${id}`)
      .then(res => {
        dispatch(fetchOne(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      return {
        ...statePart,
        cart: [...statePart.cart, action.payload],
      };
    }
    case EDIT_IN_CART: {
      const statePartIndex = statePart.cart.findIndex(item => item._id === action.payload._id);
      statePart.cart.splice(statePartIndex, 1, action.payload);
      return {
        ...statePart,
        cart: [...statePart.cart],
      };
    }
    case DELETE_FROM_CART: {
      const statePartIndex = statePart.cart.findIndex(item => item._id === action.payload._id);
      statePart.cart.splice(statePartIndex, 1);
      return {
        ...statePart,
        cart: [...statePart.cart],
      };
    }
    case FETCH_ONE: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        oneProduct: action.payload,
      };
    }
    default:
      return statePart;
  }
};
