import { Box, Text, Link } from "@rebass/emotion";

const links = [
  //   {
  //     label: "About",
  //     link: "/about"
  //   },
  {
    label: "GitHub",
    link: "https://github.com/j0lv3r4/pa11y"
  }
];

const Footer = () => (
  <Box as="footer" py={4} width={[1, 1 / 3]} mx="auto">
    <Text textAlign="center" mb={0}>
      <p>
        Made by <Link href="https://jolvera.biz">Juan Olvera</Link>
      </p>

      {links.map(({ label, link }) => (
        <Link key={link} href={link}>
          {label}
        </Link>
      ))}
    </Text>
  </Box>
);

export default Footer;
