import React from 'react';
import { useStateValue } from '../state';
import { UserForm } from '../components/UserForm';
import RegisterMutation from '../containers/RegisterMutation';
import LoginMutation from '../containers/LoginMutation';

export const NotRegisteredUser = () => {
  const [{ isAuth }, dispatch] = useStateValue()
  const dispatchOpts = {
    type: 'authenticate',
    isAuth: true,
  }

  return (
    <>
      <RegisterMutation>
        {
          (mutation, loading, error) => {
            const handleOnSubmit = async ({ email, password }) => {
              try {
                const input = { email, password }
                const res = await mutation({ variables: { input } })
                const { singup } = res.data
                dispatch({ type: 'register', token: singup })
              } catch (error) {
                console.error(error)
              }
            }

            const errorMsg = error && 'El usuario ya existe o hay algún problema.'

            return <UserForm disabled={loading} onSubmit={handleOnSubmit} title='Registrarse' error={errorMsg} />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (mutation, loading, error) => {
            console.log(error);
            const handleOnSubmit = async ({ email, password }) => {
              try {
                const input = { email, password }
                const res = await mutation({ variables: { input } })
                const { login } = res.data
                dispatch({ ...dispatchOpts, token: login })
              } catch (error) {
                console.error(error)
              }
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.'

            return <UserForm disabled={loading} onSubmit={handleOnSubmit} title='Iniciar sesión' error={errorMsg} />
          }
        }
      </LoginMutation>
    </>
  );
}
