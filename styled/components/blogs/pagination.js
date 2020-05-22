import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: white;
  height: 40px;
`;

export const LinkChildren = styled.div`
  background: inherit;
  color: ${props => props.isActive ? '#fff' : '#a4abb1'};
  transition: 0.3s all;
  cursor: pointer;
`;

export const Continue = styled.div`
  background: inherit;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonPagination = styled.button`
  appearance: inherit !important;
  background: inherit;
  border: none;
  margin: 0 auto;
  color: white;
  height: 40px;
  max-width: 400px;
  width: 60px;
  justify-content: space-around;
  cursor: pointer;
  
  &[disabled] {
    background-color: #866767 !important;
    transition: 0.3s all;
  }
  ​&:hover {
    fill: red;
    background: darkgrey !important;
    transition: background-color .2s, transform .2s;
  }
  
  img {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: relative;
    display: block;
    width: 60px;
  }
`;
