import React from 'react';
import { useStateValue } from '../state';

export const NotRegisteredUser = () => {
  const [{ isAuth }, dispatch] = useStateValue()
  const dispatchOpts = {
    type: 'authenticate',
    isAuth: true,
  }

  const handleOnClick = () => dispatch(dispatchOpts)

  return (
    <form> 
      <button onClick={handleOnClick}>Iniciar sesión</button>
    </form>
  );
}
