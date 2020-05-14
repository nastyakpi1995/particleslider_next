import styled from 'styled-components';

export const BoxWrapper = styled.div`
  & a {
    position: relative;
    text-indent: 18px;
    text-decoration: none;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    font: 14px "BrandonText", Helvetica, Arial, sans-serif;
    vertical-align: middle;
    color: #ffffff;
    display: inline-block;
  }
`;

export const Header = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`;

export const Img = styled.img`
  width: 100px;
`;
