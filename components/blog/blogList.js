import React from 'react';
import {useRouter} from 'next/router';

import Card from './card';
import Pagination from './pagination';

import articles from '../../constants/articles';
import {Container} from '../../styled/components/blogs/blogs';

const BlogList = () => {
  const useRouterValue = useRouter().query.page

  const currentPage = useRouterValue ? useRouterValue : 1;
  const totalLength = articles.length;
  const perPage = 5;
  const endPage = currentPage * perPage;
  const pagesQuantity = Math.ceil(totalLength / perPage);
  const startRange = endPage - perPage;

  return (
    <Container>
      <div>
        {articles
          .slice(startRange, endPage)
          .map(item => (
            <Card
              key={item.id}
              pagesQuantity={pagesQuantity}
              id={item.id}
              name={item.name}
              span={item.span}
              content={item.content}
              title={item.title}
            />
          ))
        }
      </div>
      <Pagination currentPage={+currentPage} endPage={pagesQuantity}/>
    </Container>
  );
};

export default BlogList;
