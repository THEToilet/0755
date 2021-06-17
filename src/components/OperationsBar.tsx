import styled from "styled-components";

const OperationsContainer = styled.div`
  //margin: 10px 80px 20px 20px;
  //padding-right: 30px;
  //padding-left: 30px;
  //margin-top: 10px;
  margin: 10px 0 auto;
  width: 100%;
  height: 60px;
`;

const OperationsIcons = styled.div`
  align-items: flex-end;
  background-color: #c4c4c4;
  border-radius: 15px;
  display: flex; // 子要素を横並びにする
  height: 40px;
  //justify-content: flex-end;
  //min-width: 226px;
  padding: 9px 28px;
  margin-right: 30px;
  //position: relative;
  text-align: center;
  float: right;
`;

const Icon = styled.img`
  height: 40px;
  //margin-bottom: 1px;
  //margin-left: 30px;
  mix-blend-mode: normal;
  width: 40px;
  margin: 0 3px;
  &:hover{
    opacity: 0.3;
  }
`;

const OperationsName = styled.div`
  //letter-spacing: 0;
  //min-height: 21px;
  //min-width: 143px;
  position: relative;
  margin-top: 30px;
  margin-left: 30px;
  font-size: 18px; 
  line-height: 21px;
  mix-blend-mode: normal;
//  text-align: center;
  float: left;
  border-bottom: solid 3px #555;
  @import url("https://fonts.googleapis.com/css?family=Ubuntu:400|Roboto:400");
`;

const OperationsBar = () => {
    return (
        <OperationsContainer>
            <OperationsName>Sort by Favorites</OperationsName>
            <OperationsIcons>
                <Icon src={process.env.PUBLIC_URL + 'images/search_black_24dp.svg'} alt="search"/>
                <Icon src={process.env.PUBLIC_URL + 'images/sort_black_24dp.svg'} alt="sort"/>
                <Icon src={process.env.PUBLIC_URL + 'images/view_list_black_24dp.svg'} alt="list"/>
            </OperationsIcons>
        </OperationsContainer>
    );
};

export default OperationsBar;