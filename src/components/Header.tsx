import styled from "styled-components";

const HeaderDiv = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 78px;
  width: 1440px;
`;

const HeaderBack = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  height: 70px;
  min-width: 1440px;
  padding: 0 646px;
`;

const Logo = styled.img`
  height: 52px;
  mix-blend-mode: normal;
  object-fit: cover;
  width: 144px;
`;

const HeaderBottom = styled.div`
  background-color: #2a2e2f;
  height: 8px;
  mix-blend-mode: normal;
  width: 1440px;
`;
const Header = () => {
    return (
        <HeaderDiv>
            <HeaderBack>
                <Logo className="logo" src={process.env.PUBLIC_URL + '0755.gif'} alt="logo"/>
            </HeaderBack>
            <HeaderBottom/>
        </HeaderDiv>
    );
};

export default Header;