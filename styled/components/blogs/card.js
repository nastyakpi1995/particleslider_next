import styled from 'styled-components';

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;
  color: #cddaf7;
  margin-bottom: 30px;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

export const CardWrapper = styled.div`
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 50px;
  p {
    display: block;
    color: #c3cfda;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 5px;
  }
`;

export const CardTitle = styled.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  margin-right: 15px;
  img {
    overflow: hidden;
    box-sizing: border-box;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    cursor: pointer;
  }
`;

export const CardBody = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 15px;
  align-items: flex-end;
   
  select {
    color: white;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  margin: 15px 0 0;
    
  h5 {
    color: #c3cfda;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
    margin-top: 0;
  }
  span {
    display: block;
    color: #c3cfda;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 5px;
  }
  p {
    color: #c3cfda;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    margin: 0 0 5px 0;
  }  
`;
