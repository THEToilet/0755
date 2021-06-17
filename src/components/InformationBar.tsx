import styled from "styled-components";

const InformationContainer = styled.div`
  //align-items: flex-end;
  background-color: #c4c4c4;
  border-radius: 10px;
  //display: flex; // 子要素を横並びにする
  height: 100px;
  //justify-content: flex-end;
  //min-width: 226px;
  //padding: 9px 10px;
  width: 100%;
  //margin: 0px auto;
  //position: relative;
  //text-align: center;
  padding: 30px 30px;
  margin: 0 auto;
  position: absolute; //絶対位置
  bottom: 0;  //下に固定
  z-index: 4;
  &:hover{
    height: 500px;
  }
`;

const InformationBar = () => {
    return (
        <InformationContainer/>
    );
};
export default InformationBar;