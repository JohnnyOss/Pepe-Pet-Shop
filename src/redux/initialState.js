export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    oneProduct: {},
    cart: [],
  },
  categories: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  orders: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
};
