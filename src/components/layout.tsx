/*
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.css';
import { todosRequested } from '../state/actions/todos';
// import '../styles/app.css'

const Layout = ({ children }: { children: any }) => {

  const dispatch = useDispatch();

  useEffect(() => {

    /*
     * This is an example of doing things when the app first loads.
     * You can dispatch a Redux action here to do some async thing
     * when the webapp boots up.
     */

    dispatch(todosRequested());

  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >

        <main className='flex flex-col text-center items-center'>{children}</main>
        <footer className='flex flex-col text-center mt-5'>
          <h4 className='m-auto'>EverybodyCodes © {new Date().getFullYear()}</h4>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
