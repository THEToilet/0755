import styled from "styled-components";

const HeaderContainer = styled.div`
  //max-width: 1440px;
  width: 100%;
 // position: fixed;
//  padding: 0 15px;
  //  margin: 0 15px;
  z-index: 1;
`;

const HeaderBack = styled.div`
  background-color: #ffffff;
  //max-width: 1440px;
  //height: 70px;
  width: 100%;
  //padding: 0 15px;
  z-index: 1;
`;

const Logo = styled.img`
  mix-blend-mode: normal;
  margin: 0 auto;
  object-fit: contain;
  width: 120px;
  display: block;
  z-index: 2;
  &:hover{
    opacity: 0.4;
  }
`;

const HeaderBottom = styled.div`
  background-color: #2a2e2f;
  //max-width: 1440px;
  height: 8px;
  mix-blend-mode: normal;
  width: 100%;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo className="logo" src={process.env.PUBLIC_URL + '0755.gif'} alt="logo"/>
            <HeaderBack/>
            <HeaderBottom/>
        </HeaderContainer>
    );
};

export default Header;