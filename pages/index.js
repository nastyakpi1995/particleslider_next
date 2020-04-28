import React from 'react';
import Head from "next/head";

import { GlobalStyle } from '../components/styled/homePage';
import TopMenu from '../components/TopMenu/topMenu';

const HomePage = () => (
   <div>
       <Head>
           <title>Axels</title>
       </Head>
       <GlobalStyle />
       <TopMenu />
   </div>
);

export default HomePage;
