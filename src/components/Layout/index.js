import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Div, SubTitle, Title } from './styles';

export const Layout = ({ children, subtitle, title }) => (
  <>
    <Helmet>
      { title && <title>{title} | Petgram </title> }
      { subtitle && <meta name='description' content={subtitle} /> }
    </Helmet>
    <Div>
      { title && <Title>{title}</Title> }
      { subtitle && <SubTitle>{subtitle}</SubTitle> }
      { children }
    </Div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string,
}