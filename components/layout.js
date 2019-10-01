import { Box } from "rebass";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <Box fontFamily="body" fontSize={3} lineHeight="body">
      <Header />

      <main>{children}</main>

      <Footer />
    </Box>
  );
};

export default Layout;
