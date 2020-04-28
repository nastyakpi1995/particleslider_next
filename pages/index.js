import React from 'react';
import Head from 'next/head';
import Particles from 'react-particles-js';

import { GlobalStyle } from '../components/styled/homePage';
import TopMenu from '../components/TopMenu/topMenu';
import paramToObj from '../components/configs/particlesSlider';

const HomePage = () => (
    <div>
        <Head>
            <title>Axels</title>
        </Head>
        <GlobalStyle />
        <TopMenu />
        <Particles
            params={paramToObj}
        />
    </div>
);

export default HomePage;
