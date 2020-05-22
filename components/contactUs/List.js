import React from 'react';

import Form from './Form';
import {icons, links, description} from '../../constants/contactUs';

import {Name, Menu, Link, Ul, Li, Description} from '../../styled/components/contactUs';

const List = () => (
  <Menu>
    <Name>Axels-ua:</Name>
    <div>
      <Ul>
        {icons.map((icon, index) => (
          <Li key={index}>
            <Link href={links[index]}>
              <img src={icon} alt="icon"/>
              <Description>{description[index]}</Description>
            </Link>
          </Li>
        ))}
        <Li>
          <Form/>
        </Li>
      </Ul>
    </div>
  </Menu>
);

List.propTypes = {};

export default List;
