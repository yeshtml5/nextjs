/**
 * @name Layout
 */
import styled from "styled-components";
import { COLOR, layout } from "styles";

export default function Header() {
  return (
    <HeaderContent>
      <div className={`wrapper ${layout.space_between}`}>
        <div className="logo">YESHTML5</div>
        <div style={{ padding: 20, backgroundColor: COLOR.GRAY4 }}>header</div>
      </div>
    </HeaderContent>
  );
}
//*--------------------------------------------------*
const HeaderContent = styled.div`
  .wrapper {
    padding: 5px 20px;
    background-color: ${COLOR.BLUE1};
  }
  .logo {
    font-size: 20px;
  }
`;
