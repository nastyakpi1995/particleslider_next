import React from 'react';

import { GlobalStyle } from '../components/styled/homePage';
import { Content } from '../components/styled/pages/pages';
import TopMenu from '../components/TopMenu/topMenu';

const Services = () => (
  <>
     <GlobalStyle />
     <TopMenu />
     <Content>Services</Content>
  </>
);

export default Services;
