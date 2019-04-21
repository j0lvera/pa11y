import { Box, Text, Link } from "@rebass/emotion";
const Footer = () => (
  <Box as="footer" py={4}>
    <Text textAlign="center" mb={0}>
      A Weekend Project by <Link href="https://jolvera.biz">Juan Olvera</Link>
    </Text>
  </Box>
);

export default Footer;
