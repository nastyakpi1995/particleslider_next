import React from 'react';
import Link from 'next/link';

import {CardTitle, CardBody, CardWrapper, Content, Title} from '../../styled/components/blogs/card';

const Card = ({id, name, span, content, title}) => (
  <CardWrapper>
    <Link href={`article/${id}`}>
      <Title>{title}</Title>
    </Link>
    <CardBody>
      <Link href={`article/${id}`}>
        <CardTitle>
          <img src="blog/avatar.jpg" alt="avatar"/>
        </CardTitle>
      </Link>
      <Content>
        <h5>{id} {name}</h5>
        <span>{span}</span>
      </Content>
    </CardBody>
    <p>{content}</p>
  </CardWrapper>
);

export default Card;
