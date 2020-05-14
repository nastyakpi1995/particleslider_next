import styled from 'styled-components';

export const AboutUsWrapper = styled.section`
  font-family: 'Roboto', Arial, sans-serif;
  background: #fff;
  padding: 180px 0;
`;

export const FlexContainet = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 1200px;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    max-width: 920px;
    font-size: 18px;
  }
  @media screen and (max-width: 980px) {
    flex-direction: column;
    max-width: 600px;
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 550;
  line-height: 1;
  @media screen and (max-width: 1200px) {
    font-size: 38px;
  }
`;
export const ContentText = styled.div`
  font-size: 20px;
  line-height: 1.55;
  width: 52%;
  @media screen and (max-width: 980px) {
    width: calc(100% - 1rem);
    margin-bottom: 2%;
  }
`;

export const ContentImg = styled.div`
  width: 450px;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const ListItem = styled.li`
  margin-bottom: 3%;
  margin-right: 3%;
  width: 48.5%;
  &:nth-child(n + 3){
    margin-bottom: 0;
  }
  &:nth-child(even){
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
`;
