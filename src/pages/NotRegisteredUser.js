import React from 'react';
import { useStateValue } from '../state';
import { Layout } from '@components/Layout';
import { UserForm } from '@components/UserForm';
import RegisterMutation from '@containers/RegisterMutation';
import LoginMutation from '@containers/LoginMutation';
import { NOT_REGISTER_USER_TITLE, NOT_REGISTER_USER_CONTENT } from '../constants';

export default () => {
  const [{ isAuth }, dispatch] = useStateValue()
  const dispatchOpts = {
    type: 'authenticate',
    isAuth: true,
  }

  return (
    <Layout title={NOT_REGISTER_USER_TITLE} subtitle={NOT_REGISTER_USER_CONTENT}>
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
    </Layout>
  );
}
