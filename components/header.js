import { Global, css } from "@emotion/core";
import Head from "./head";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <Head />
      <Nav />
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
        `}
      />
    </>
  );
};

export default Header;
