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
    padding: 5px 20px;
    background-color: ${COLOR.BLACK1};
  }
  .logo {
    color: ${COLOR.WHITE};
    font-size: 20px;
  }
  aside {
    color: ${COLOR.WHITE};
    font-size: 14px;
  }
`;
