export const initialState = {
  isAuth: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'authenticate':
      return {
        ...state,
        isAuth: action.isAuth
      };
      
    default:
      return state;
  }
};