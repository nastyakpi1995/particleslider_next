import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

import {
  PaginationWrapper,
  ButtonPagination,
  Continue,
  LinkChildren,
  Body
} from '../../styled/components/blogs/pagination';

const Pagination = ({currentPage, endPage}) => {
  const number = currentPage - 1;

  return (
    <PaginationWrapper>
      <ButtonPagination
        type='button'
        onClick={() => Router.push(`/blog?page=${currentPage - 1}`)}
        disabled={currentPage === 1}
      >
        <img src="blog/back.svg" alt="back button" />
      </ButtonPagination>
      <Body>
      {currentPage > 1 && (
        <Link href="/blog?page=1">
          <LinkChildren>1</LinkChildren>
        </Link>
      )}
      {currentPage >= 4 && (
        <Continue>...</Continue>
      )}
      {currentPage >= 3 && (
        <Link href={`/blog?page=${number}`}>
          <LinkChildren>{number}</LinkChildren>
        </Link>
      )}
      <Link href={`/blog?page=${currentPage}`}>
        <LinkChildren isActive>{currentPage}</LinkChildren>
      </Link>
      {currentPage < endPage && (
        <Link href={`/blog?page=${currentPage + 1}`}>
          <LinkChildren>{currentPage + 1}</LinkChildren>
        </Link>
      )}
      {currentPage < (endPage - 2) && (
        <Continue>&nbsp;...&nbsp;</Continue>
      )}
      {currentPage < (endPage - 1) && (
        <Link href={`/blog?page=${endPage}`}>
          <LinkChildren>{endPage}</LinkChildren>
        </Link>
      )}
      </Body>
      <ButtonPagination
        type='button'
        onClick={() => Router.push(`/blog?page=${currentPage + 1}`)}
        disabled={currentPage === endPage}
      >
        <img src="blog/next.svg" alt="next button" />
      </ButtonPagination>
    </PaginationWrapper>
  );
};

export default Pagination;
