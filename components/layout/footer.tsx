/**
 * @name Layout/Footer
 */
import styled from "styled-components";
import { COLOR } from "styles";

export default function Footer() {
  return (
    <Content>
      <div className="wrapper">
        {/* <div>footer</div> */}
        <p className="copyright">
          YESHTML5©2022 All Rights Reserved.
          <a rel="noreferrer" href="mailto:yeshtml5@gmail.com" target="_blank">
            yeshtml5@gmail.com
          </a>
          <a
            rel="noreferrer"
            href="https://githgub.com/yeshtml5"
            target="_blank"
          >
            github
          </a>
        </p>
      </div>
    </Content>
  );
}
//*--------------------------------------------------*
const Content = styled.footer`
  .wrapper {
    border-top: 1px solid ${COLOR.GRAY4};
    display: block;
    padding: 5px 20px;
  }
  .copyright {
    font-size: 10px;
    color: ${COLOR.GRAY1};
  }
  a {
    margin-left: 5px;
    text-decoration: underline;
    color: ${COLOR.GRAY1};
  }
`;
