/* selectors */
export const getAll = ({products}) => products.data;
export const getOneProduct = ({products}, id) => products.data.find(item => item.id === id);
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
const DELETE_ALL_CART = createActionName('DELETE_ALL_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const editInCart = payload => ({ payload, type: EDIT_IN_CART});
export const deleteFromCart = payload => ({ payload, type: DELETE_FROM_CART});
export const deleteAllCart = payload => ({ payload, type: DELETE_ALL_CART});

/* thunk creators */

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
      const statePartIndex = statePart.cart.findIndex(item => item.id === action.payload.id);
      statePart.cart.splice(statePartIndex, 1, action.payload);
      return {
        ...statePart,
        cart: [...statePart.cart],
      };
    }
    case DELETE_FROM_CART: {
      const statePartIndex = statePart.cart.findIndex(item => item.id === action.payload.id);
      statePart.cart.splice(statePartIndex, 1);
      return {
        ...statePart,
        cart: [...statePart.cart],
      };
    }
    case DELETE_ALL_CART: {
      return {
        ...statePart,
        cart: [],
      };
    }
    default:
      return statePart;
  }
};
