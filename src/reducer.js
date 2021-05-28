export const initialState = {
  isAuth: window.sessionStorage.getItem('token')
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'authenticate':
      action.token && window.sessionStorage.setItem('token', action.token)
      return {
        ...state,
        isAuth: action.isAuth
      };
    case 'removeAuth':
      window.sessionStorage.removeItem('token', action.token)
      return {
        ...state,
        isAuth: !state.isAuth
      };
      
    default:
      return state;
  }
};