import React from 'react';

import {PageHeader, BlogList} from '../components';
import {Content} from '../styled/pages/pages';

const Blog = () => (
  <>
    <PageHeader/>
    <Content>
      <BlogList/>
    </Content>
  </>
);

export default Blog;
