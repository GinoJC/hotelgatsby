import React from 'react';
import Header from './header';
import { Global, css } from '@emotion/react';
import Helmet from 'react-helmet';

const Layout = ({children}) => {
  return (
    <>
      <Global
        styles={css`
        html {
          font-size: 62.5%;
        }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }
          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: 'Roboto', serif;
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>Gatsby Hotel</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header/>
      {children}
    </>
  );
};

export default Layout;