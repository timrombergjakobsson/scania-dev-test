import GlobalStyles from "./global_styles";
import styled from "styled-components";
import { ReactComponent as Logo } from "./scania-symbol.svg";
import "scania-dropdown";

const Wrapper = styled.section`
  padding: 40px;
`;

const Header = styled.header`
  background: var(--blue-900);
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 64px;
  width: 100%;
`;

const HeaderUpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderLower = styled.div`
  background: var(--white);
  height: 68px;
  display: inline-block;
  width: 100%;
`;

const Item = styled.div`
  &:last-child {
    display: flex;
  }
`;

const LogoWrapper = styled.div`
  padding: 15px;
`;

const StyledLogo = styled(Logo)`
  height: 31px;
  width: 30px;
`;

const Divider = styled.span`
  display: inline-block;
  border-left: 1px solid var(--white);
  height: 64px;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header>
        <>
          <HeaderUpper>
            <Item>
              <p>Fleet Portal</p>
            </Item>

            <Item>
              <Divider />
              <LogoWrapper>
                <StyledLogo />
              </LogoWrapper>
            </Item>
          </HeaderUpper>
          <HeaderLower>
            <h1>Driver evaluation</h1>
          </HeaderLower>
        </>
      </Header>
      <Wrapper>
        <main>
          <dropdown-component placeholder="Select Distance"></dropdown-component>
          <table-component></table-component>
        </main>
      </Wrapper>
    </div>
  );
}

export default App;
