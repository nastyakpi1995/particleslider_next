import React from 'react';
import Head from 'next/head';

import {GlobalStyle} from '../styled/pages/pages';
import {TopMenu} from '../components';

const PageHeader = () => (
  <>
    <Head>
      <title>Axels</title>
    </Head>
    <GlobalStyle/>
    <TopMenu/>
  </>
);

PageHeader.propTypes = {};

export default PageHeader;
