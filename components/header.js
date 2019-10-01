import { Box, Flex, Text, Link, Button } from "rebass";
import Head from "./head";
import Logo from "../static/logo.svg";

const Header = () => {
  return (
    <Box as="header" py={2}>
      <Head
        title="Pa11y - A tool to generate accessible color palettes"
        description="Generate color palettes and check WCAG color contrast ratio for each combination"
        url="https://pa11y.com"
        ogImage=""
      />

      <Flex alignItems="center" width={[1, "70%"]} mx="auto" py={4}>
        <Logo width="80" height="100" viewBox="0 0 17 32" />
        <Text as="h1" textAlign="center" my={0}>
          Pa11y
        </Text>

        <Flex as="nav" ml={4}>
          <Link href="#!" mr={2}>
            Features
          </Link>
          <Link href="#!" mr={2}>
            Pricing
          </Link>
        </Flex>

        <Flex ml="auto" alignItems="center">
          <Link href="/login" mr={2}>
            Login
          </Link>
          <Button>Free Trial</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
