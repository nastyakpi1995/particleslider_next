import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: black;
  width: 100%;
  max-width: 778px;
  color: white;
  margin: 20px auto;

  @media (max-width: 1200px) {
    max-width: 590px;
  }
  
  @media (max-width: 992px)
    max-width: 100%;
  }
`;
