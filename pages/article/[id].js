import React from 'react';

import {PageHeader, ArticleComponent} from '../../components';
import {Content} from '../../styled/pages/pages';

const Article = () => (
  <>
    <PageHeader/>
    <Content>
      <ArticleComponent/>
    </Content>
  </>
);

export default Article;
