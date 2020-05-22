import React from 'react';

import List from './List';
import Map from './Map';

import {GlobalStyle} from '../../styled/pages/pages';
import {
  Wrapper,
  Title,
  ContentWrapper,
} from '../../styled/components/contactUs';

const ContactUs = () => (
  <Wrapper>
    <GlobalStyle/>
    <div>
      <Title>Contacts</Title>
    </div>
    <ContentWrapper>
      <List/>
      <Map/>
    </ContentWrapper>
  </Wrapper>
);

ContactUs.propTypes = {};

export default ContactUs;
