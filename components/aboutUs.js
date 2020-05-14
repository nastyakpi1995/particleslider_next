import React from 'react';

import {
  AboutUsWrapper, 
  Img, 
  FlexContainet, 
  ContentText, 
  ContentImg,
  List,
  ListItem,
  Title
} from '../styled/components/aboutUs';

const AboutUs = () => (
  <>
    <AboutUsWrapper>
      <FlexContainet>
        <ContentText>
          <Title>About us</Title>
          <p>We are a fully distributed software development company of the new generation.</p>
          <p>Startups and emerging companies are our favorite allies. And we are happy to be
             the technical partner they recommend to their peers without a doubt.</p>
          <p>Trust and transparency in everything we do help us achieve long-term collaboration with clients.</p>
        </ContentText>
        <ContentImg>
          <List>
            <ListItem>
              <Img src="about1.png" alt="company"/>
            </ListItem>
            <ListItem>
             <Img src="about2.png" alt="company"/>
            </ListItem>
            <ListItem>
              <Img src="about3.png" alt="company"/>
            </ListItem>
            <ListItem>
              <Img src="about4.png" alt="company"/>
            </ListItem>
          </List>
        </ContentImg>
      </FlexContainet>
    </AboutUsWrapper>
  </>
);

AboutUs.propTypes = {};

export default AboutUs;