import React from 'react';
import {useRouter} from 'next/router';

import articles from '../../constants/articles';
import {Container, ArticleTitle} from '../../styled/components/article';

const ArticleComponent = () => {
  const idArticle = useRouter().query.id;
  const witchArticle = articles.filter((item, id) => id === +idArticle);

  return (
    <div>
      {witchArticle && witchArticle.map(item => (
        <Container>
          <ArticleTitle>
            {item.title}
          </ArticleTitle>
          {item.content}
        </Container>
      ))}
    </div>
  );
};

export default ArticleComponent;
