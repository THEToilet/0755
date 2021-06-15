import styled from "styled-components";

const OperationsIcons = styled.div`
  align-items: flex-end;
  background-color: #c4c4c4;
  border-radius: 15px;
  display: flex;
  //height: 54px;
  justify-content: flex-end;
  //min-width: 226px;
  padding: 9px 28px;
  position: relative;
  text-align: right;
`;

const Icon = styled.img`
  height: 30px;
  margin-bottom: 1px;
  //margin-left: 30px;
  mix-blend-mode: normal;
  width: 30px;
`;

const Operations = () => {
    return (
        <OperationsIcons>
            <Icon src={process.env.PUBLIC_URL + 'images/search_black_24dp.svg'} alt="search"/>
            <Icon src={process.env.PUBLIC_URL + 'images/sort_black_24dp.svg'} alt="sort"/>
            <Icon src={process.env.PUBLIC_URL + 'images/view_list_black_24dp.svg'} alt="list"/>
        </OperationsIcons>
    );
}

export default Operations;