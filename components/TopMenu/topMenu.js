import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Header, Img, BoxWrapper } from '../styled/topMenu';

const pages = [
    {id: '', text: 'home'},
    {id: '/works', text: 'works'},
    {id: '/technologies', text: 'technologies'},
    {id: '/services', text: 'services'},
    {id: '/company', text: 'company'},
    {id: '/blog', text: 'blog'},
    {id: '/contacts', text: 'contact us'}
];

const TopMenu = () => (
    <Header>
        <Link href="/">
            <Img src="axels-logo3.png" alt="logo Axels"/>
        </Link>
        <BoxWrapper>
            {pages.map(page => (
                <Link
                    key={page.id}
                    href={`${page.id}`}
                >
                    <a>{page.text}</a>
                </Link>
            ))}
        </BoxWrapper>
    </Header>
);

TopMenu.propTypes = {
    pages: PropTypes.arrayOf(PropTypes.string)
};

export default TopMenu;
