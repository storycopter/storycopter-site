import React from 'react';
import { graphql } from 'gatsby';

import ThemeProvider from '@material-ui/styles/ThemeProvider';

import Layout from './partials/Layout';
import { docTheme } from '@storycopter/ui';

export default function ErrorTpl(props) {
  console.group('ErrorTpl.js');
  console.log(props);
  console.groupEnd();

  return (
    <ThemeProvider theme={docTheme}>
      <Layout contextData={props.pageContext.contextData}>
        <h1>Error</h1>
      </Layout>
    </ThemeProvider>
  );
}

export const pageQuery = graphql`
  query ErrorTplQuery($uid: String!) {
    essential: essentialsJson(meta: { uid: { eq: $uid } }) {
      meta {
        path
        title
        uid
      }
    }
  }
`;