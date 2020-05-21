import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Title from './title';
import IconCard from './IconCard';
import { icons } from './iconsData';
import { Wrapper, Icons, Icon } from '../../styled/components/technologies/technologies';

const TechContent = () => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" 
      rel="stylesheet"></link>
    </Head>
    <section style={{"backgroundColor": "rgba(21,21,21,1)", color: "#fff"}}>
      <Wrapper>
        <Title
        title="Software for modern platforms"
        message="We help businesses and individuals establish
        their presence on any modern device and platform – mobile, web, etc."
        />
          <Icons>
            <IconCard array={icons[0]}/>
            <IconCard array={icons[1]}/>
          </Icons>
          <Icon large>
             <IconCard array={icons[2]}/>
          </Icon>
      </Wrapper>
      <Wrapper large>
        <Title
        title="Technology stack"
        message="We use modern, innovative technologies and approaches that allow us 
        to support any solution and provide the foundation for its future scaling and enhancement."
        />
        <h2>Mobile</h2>
        <Icons large>
          <IconCard array={icons[3]}/>
          <IconCard array={icons[4]}/>
          <IconCard array={icons[5]}/>
        </Icons>
        <h2>Web</h2>
        <Icon large six>
          <IconCard array={icons[6]}/>
        </Icon>
        <Icons large single>
          <IconCard array={icons[7]}/>
        </Icons>
      </Wrapper>
    </section>
  </>
);

TechContent.propTypes = {};

export default TechContent;
