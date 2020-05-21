import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  h2 {
    font-size: 50px;
    font-weight: 800;
    text-align: center;
  }
`;

export const SameStyle = styled.div`
  display: flex; 
  justify-content: ${props => props.single ? "center" : "space-between"};
  margin: 10% auto 0;
  padding-bottom: 20px;
  max-width: ${props => props.large ? "1200px" : "800px"};
  @media screen and (max-width: 700px) {
    max-width: ${props => props.large ? "600px" : "500px"};
    align-items: center;
    flex-direction: column;
  }
  ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;  
    justify-content: space-between;
    align-items: flex-end;
    padding: 0;
  }
  strong {
    position: relative;
    text-align: center;
    margin-top: 15px;
  }
  strong:before {
    display: block;
    position: absolute;
    width: ${props => props.large ? "150%" : "200%"};
    left: ${props => props.large ? "-25%" : "-50%"};
    bottom: -30%;
    content: "";
    height: 1.5px;
    background: #19a3b9;
  }
  .stack {
    font-size: 29px;
  }
  li {
    display: flex;
    flex-direction: column;
    list-style-type: none; 
    align-items: center;
  }
  li:first-child {
    width: 100%;
    margin-bottom: 13%;
    padding: 0;
    & :before {
      border: .1px solid #19a3b9;
      background: #000;
      height: 2.5px;
    }
  }
  img {
    opacity: 0.65;
  }
  .webIcon {
    width: 120px;
    height: 90px;
    @media screen and (max-width: 930px) {
      width: 110px;
      height: 86px;
    }
    @media screen and (max-width: 700px) {
      width: 75px;
      height: 56px;
    }
  }
  .PCIcon {
    width: 140px;
    height: 120px;
    @media screen and (max-width: 930px) {
      width: 120px;
      height: 100px;
    }
    @media screen and (max-width: 700px) {
      width: 95px;
      height: 75px;
    }
  }
  .laptopIcon {
    width: 130px;
    height: 105px;
    @media screen and (max-width: 930px) {
      width:${props => props.large ? "110px" : "110px"};
      height:${props => props.large ? "85px" : "85px"};
    }
    @media screen and (max-width: 700px) {
      width:${props => props.large ? "80px" : "65px"};
      height:${props => props.large ? "65px" : "40px"};
    }
  }
  .platformIcon {
    width: 90px;
    height: 90px;
    @media screen and (max-width: 930px) {
      width: 70px;
      height: 70px;
    }
    @media screen and (max-width: 700px) {
      width:${props => props.large ? "40px" : "60px"};
      height:${props => props.large ? "40px" : "60px"};
    }
  }
  .technologies {
    width: 65px;
    height: 65px;
    @media screen and (max-width: 930px) {
      width: 57px;
      height: 57px;
    }
    @media screen and (max-width: 700px) {
      width:${props => props.large ? "60px" : "70px"};
      height:${props => props.large ? "60px" : "70px"};
    }
    @media screen and (max-width: 700px) {
      width:${props => props.large ? "45px" : " "};
      height:${props => props.large ? "45px" : " "};
    }
  }
  .phoneIcon {
    width: 40px;
    height: 80px;
    @media screen and (max-width: 930px) {
      width: 34px;
      height: 70px;
    }
    @media screen and (max-width: 700px) {
      width:${props => props.large ? "25px" : "25px"};
      height:${props => props.large ? "50px" : "50px"};
    }
  }
  .tabletIcon {
    width: 70px;
    height: 100px;
    @media screen and (max-width: 930px) {
      width:${props => props.large ? "50px" : "55px"};
      height:${props => props.large ? "80px" : "80px"};
    }
    @media screen and (max-width: 700px) {
      width: 46px;
      height: 70px;
    }
  }
  .smalltIcon {
    width: 50px;
    height: 50px;
  }
  .node {
    width: 90px;
    height: 54px;
    @media screen and (max-width: 700px) {
      width: 80px;
      height: 49px;
    }
  }
  .python {
    width: 65px;
    height: 65px;
    @media screen and (max-width: 700px) {
      width: 55px;
      height: 55px;
    }
  }
`;

export const Icon = styled(SameStyle)`
  ul {
    width: ${props => props.six ? "95%" : "85%"};
    margin: 0 auto;
    @media screen and (max-width: 520px) {
      justify-content: space-between;
      width: ${props => props.six ? "95%" : "70%"};
      min-height: 450px;
      align-items: baseline;
    }
    @media screen and (max-width: 430px) {
      width: ${props => props.six ? "100%" : "84%"};
    }
  }
  li {
    width: ${props => props.six ? "15%" : "17%"};
    @media screen and (max-width: 700px) {
      width: ${props => props.six ? "35%" : " "};
      padding-bottom: ${props => props.six ? "45px" : " "};
    }
    @media screen and (max-width: 520px) {
      width: 35%;
    }
  }
  li:nth-child(1n + 2):after {
    position: absolute;
    content: '';
    display: inline-block;
    width: ${props => props.six ? "90px" : "120px"};
    height: 85px;   
    top:  ${props => props.six ? "42%" : "40%"};
    @media screen and (max-width: 1150px) {
      width: ${props => props.six ? "80px" : "90px"};
      height: ${props => props.six ? "55px" : "64px"};
      top: ${props => props.six ? "" : "41%"};
    }
    @media screen and (max-width: 930px) {
      width: ${props => props.six ? "65px" : "75px"};
      height: 62px;
      top: ${props => props.six ? "45%" : "42%"};
    }
    @media screen and (max-width: 700px) {
      width: ${props => props.six ? "90px" : "55px"};
      height: ${props => props.six ? "" : "47px"};;
      top: 42%;
    }
    @media screen and (max-width: 520px) {
      top: ${props => props.six ? "14%" : "26%"};
      width: ${props => props.six ? "73px" : "65px"};
    }
  }
  li:nth-child(3n + 2):after {
    top: ${props => props.six ? "42%" : "50%"};
    background: no-repeat url(long.png);
    background-size: 320px;
    height: 14px; 
    width: 320px;
    @media screen and (max-width: 1150px) {
      background-size: 280px;
      width: 280px;
    }
    @media screen and (max-width: 930px) {
      background-size: 200px;
      width: 200px;
      top: ${props => props.six ? "47%" : "50%"};
    }
    @media screen and (max-width: 700px) {
      background-size: ${props => props.six ? "180px" : "130px"};
      width: ${props => props.six ? "180px" : "130px"};
      top: ${props => props.six ? "43%" : "48%"};
    }
    @media screen and (max-width: 520px) {
    background-size: ${props => props.six ? "175px" : "185px"};
    width:  ${props => props.six ? "175px" : "185px"};
    top: ${props => props.six ? "" : "43%"};

    }
  }
  li:nth-child(2){
    margin-bottom: ${props => props.six ? "0" : "2%"};
    @media screen and (max-width: 520px) {
      order: ${props => props.six ? " " : "4"};
      margin-left: ${props => props.six ? "" : "25px"};
    }
  :after {
    left: ${props => props.six ? "12%" : "15%"};
    transform: ${props => props.six ? "rotate(160deg)" : "rotate(151deg)"};
    @media screen and (max-width: 930px) {
      left: ${props => props.six ? "11%" : "17%"};
    }
    @media screen and (max-width: 700px) {
      left: ${props => props.six ? "23%" : "18%"};
      top: ${props => props.six ? "31%" : ""};
      transform: ${props => props.six ? "rotate(106deg)" : "rotate(148deg)"};
    }
    @media screen and (max-width: 520px) {
      transform: ${props => props.six ? "rotate(100deg)" : "rotate(98deg)"};
      left: ${props => props.six ? "18%" : "14%"};
      top: ${props => props.six ? "31%" : ""};
    }
    @media screen and (max-width: 430px) {
      left: ${props => props.six ? "16%" : ""};
    }
  }
  }
  li:nth-child(3){
    @media screen and (max-width: 520px) {
      order: ${props => props.six ? " " : "5"};
      margin-right: ${props => props.six ? "" : "25px"};
    }
  :after {
    background: no-repeat url(noroot.png);
    background-size: ${props => props.six ? "90px" : "120px"};
    left: ${props => props.six ? "42%" : "40%"};
    top: ${props => props.six ? "33%" : ""};
    transform: rotate(-92deg);
    @media screen and (max-width: 1150px) {
      background-size: ${props => props.six ? "80px" : "90px"};
    }
    @media screen and (max-width: 930px) {
      background-size: ${props => props.six ? "65px" : "75px"};
    }
    @media screen and (max-width: 700px) {
      background-size: ${props => props.six ? "90px" : "55px"};
      top: ${props => props.six ? "19%" : " "};
      left: ${props => props.six ? "27%" : " "};
    }
    @media screen and (max-width: 520px) {
      left: 25%;
      top: ${props => props.six ? "15%" : " "};
      transform: rotate(-87deg);
      background-size: ${props => props.six ? "73px" : "65px"};
    }
  }
  }
  li:nth-child(4){
    margin: ${props => props.six ? "0 10% 0 0" : "0 0 0 10%"};
    @media screen and (max-width: 700px) {
      margin: ${props => props.six ? "0 0 0 8%" : "0 0 0 10%"};
    }
    @media screen and (max-width: 520px) {
      order: ${props => props.six ? " " : "2"};
      margin: ${props => props.six ? " " : "0"};
    }
    :after {
      background: no-repeat url(arrow.png);
      background-size: ${props => props.six ? "90px" : "120px"};
      left: ${props => props.six ? "49%" : "50%"};
      top: ${props => props.six ? "33%" : " "};
      transform: rotate(89deg);
      @media screen and (max-width: 1150px) {
        background-size: ${props => props.six ? "80px" : "90px"};
      }
      @media screen and (max-width: 930px) {
        background-size: ${props => props.six ? "65px" : "75px"};
      }
      @media screen and (max-width: 700px) {
        background-size: ${props => props.six ? "90px" : "55px"};
        top: ${props => props.six ? "19%" : ""};
        left: ${props => props.six ? "58%" : ""};
        margin: ${props => props.six ? "" : "0"};       
      }
      @media screen and (max-width: 520px) {
        left:  ${props => props.six ? "57%" : "58%"};
        top: ${props => props.six ? "15%" : " "};
        background-size: ${props => props.six ? "73px" : "65px"};
        transform: ${props => props.six ? " " : "rotate(79deg)"};
      }
    }
  }
  li:nth-child(5) {
    margin-bottom: ${props => props.six ? "0" : "6%"};
    @media screen and (max-width: 700px) {
      margin: ${props => props.six ? "0 8% 0 0" : ""};
    }
    @media screen and (max-width: 520px) {
      order: ${props => props.six ? " " : "3"}; 
      margin-bottom: ${props => props.six ? " " : "15%"}; 
    }
    :after {
      right: ${props => props.six ? "26%" : "15%"};
      transform: ${props => props.six ? "rotate(22deg)" : "rotate(27deg)"};
      background-size: ${props => props.six ? "240px" : ""};
      width: ${props => props.six ? "240px" : ""};
      height: 14px;
      @media screen and (max-width: 1150px) {
        background-size: ${props => props.six ? "190px" : " "};
        width: ${props => props.six ? "190px" : ""};
        right: ${props => props.six ? " " : "14%"};
      }
      @media screen and (max-width: 930px) {
        right: ${props => props.six ? "26%" : "16%"};
        top: ${props => props.six ? "46%" : ""};
        transform: rotate(25deg);
        background-size: ${props => props.six ? "150px" : ""};
        width: ${props => props.six ? "150px" : ""};
      }
      @media screen and (max-width: 700px) {
        right: ${props => props.six ? "18.5%" : " "};
        top: ${props => props.six ? "42%" : " "};
        transform: ${props => props.six ? "rotate(84deg)" : " "};
        background-size: ${props => props.six ? "285px" : " "};
        width: ${props => props.six ? "285px" : " "};
      }
      @media screen and (max-width: 520px) {
        transform: ${props => props.six ? "rotate(83deg)" : "rotate(83deg)"};
        right: ${props => props.six ? "15%" : "17%"};
        top: ${props => props.six ? "41%" : " "};
        background-size: ${props => props.six ? "260px" : " "};
        width: ${props => props.six ? "260px" : " "};
      }
      @media screen and (max-width: 430px) {
        right: ${props => props.six ? "12%" : " "};
      }
    }
  }
  li:nth-child(6) {
    @media screen and (max-width: 700px) {
      margin-left: 15%;
    }
    :after {
      background: no-repeat url(long.png);
      background-size: 240px;
      height: 14px; 
      width: 240px;
      left: 24%;
      transform: rotate(156deg);
      @media screen and (max-width: 1150px) {
        background-size: 200px;
        width: 200px;
      }
      @media screen and (max-width: 930px) {
        transform: rotate(156deg);
        background-size: 150px;
        width: 150px;
        top: 45%;
      }
      @media screen and (max-width: 700px) {
        background-size: 285px;
        width: 285px;
        top: 42%;
        left: 17.5%;
        transform: rotate(98deg);
      }
      @media screen and (max-width: 520px) {
        background-size: 260px;
        width: 260px;
        transform: rotate(96deg);   
        top: 41%;
        left: 13%;
      }
      @media screen and (max-width: 430px) {
        left: 10%;
      }
    }
  }
  li:nth-child(7) {
    @media screen and (max-width: 700px) {
      margin-right: 15%;
    }
    :after {
      right: 12%;
      background: no-repeat url(long.png);
      background-size: 320px;
      height: 14px; 
      width: 320px;
      transform: rotate(18deg);
      @media screen and (max-width: 1150px) {
        background-size: 270px;
        width: 270px;
      }
      @media screen and (max-width: 930px) {
        right: 12%;
        background-size: 190px;
        width: 190px;
        top: 45%;
      }
      @media screen and (max-width: 700px) {
        transform: rotate(74deg);   
        right: 24%;
        top: 31%;
        width: 180px;
        background-size: 180px;
      }
      @media screen and (max-width: 520px) {
        transform: rotate(79deg);   
        right: 20%;
        top: 32%;
      }
      @media screen and (max-width: 430px) {
        right: 18%;
      }
    }
  }
`;

export const Icons = styled(SameStyle)`
  @media screen and (max-width: 1250px) {
    max-width: 800px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ul {   
    width: ${props => props.large ? "25%" : "40%"};
    @media screen and (max-width: 1250px) {
      width: ${props => props.large ? "310px" : "40%"};
    }
    @media screen and (max-width: 700px) {
      width: ${props => props.large ? "" : "55%"};
    }
    @media screen and (max-width: 430px){
      width: ${props => props.large ? "260px" : "70%"};
    }
  }
  li {
    &:nth-child(n + 2):after{
      content: '';
      display: inline-block;
      position: absolute;
      top:  ${props => props.large ? "40%" : "48%"};
      width: 90px;
      height: 62px;
      @media screen and (max-width: 520px) {
        width: 70px;
        height: 62px;
        top: 40%;
      }
  }
    &:nth-child(2):after {
      background: no-repeat url(noroot.png);
      background-size: 89px;
      left: 26%;
      transform: rotate(-91deg);
      @media screen and (max-width: 520px) {
        background-size: 70px;
        left: 30%;
      }
    }
    &:nth-child(3):after {
      background: no-repeat url(arrow.png);
      background-size: 89px;
      left: 49%;
      transform: rotate(91deg);
      @media screen and (max-width: 520px) {
        background-size: 70px;
        left: 47%;
      }
    }
  }
  li:first-child {
    margin-bottom: 29%;
    @media screen and (max-width: 520px){
      width: 200%;
      left: -44%;
      margin-bottom: 26%;
    }
  }
`;

export const TitledWrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  text-align: center;
  color: #fafafa;
  h3 {  
    font-size: 50px;  
    font-weight: 600;
    margin: 0;
    padding: 100px 0 30px;
  }
  p {   
    width: 50%;
    margin: 0 auto;
    font-size: 15px; 
    font-weight: 300;
    line-height: 1.7;
    @media screen and (max-width: 430px) {
      width: 75%;
    }
  }
`;
