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
        {/* aside */}
        <aside>
          <div>menus</div>
        </aside>
      </div>
    </HeaderContent>
  );
}
//*--------------------------------------------------*
const HeaderContent = styled.div`
  .wrapper {
    padding: 0 20px;
    height: 50px;
    border-bottom: 1px solid ${COLOR.GRAY2};
    background-color: ${COLOR.WHITE};
  }
  .logo {
    font-size: 20px;
  }
  aside {
    font-size: 14px;
  }
`;
