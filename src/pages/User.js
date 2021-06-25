import React from 'react';

import { Layout } from '@components/Layout'
import { SubmitButton } from '@components/SubmitButton'
import { USER_CONTENT, USER_CONTENT_NOT_AUTHENTICATE, USER_TITLE, USER_TITLE_NOT_AUTHENTICATE } from '../constants'
import { useStateValue } from '../state';

export default () => {
  const [{ isAuth }, dispatch] = useStateValue()
  const title = isAuth ? USER_TITLE : USER_TITLE_NOT_AUTHENTICATE
  const subTitle = isAuth ? USER_CONTENT : USER_CONTENT_NOT_AUTHENTICATE
  return (
    <Layout title={title} subtitle={subTitle}>
      <SubmitButton onClick={() => dispatch({ type: 'removeAuth' })}>Logout</SubmitButton>
    </Layout>
  );
}
