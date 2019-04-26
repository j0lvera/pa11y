import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Text } from "@rebass/emotion";
import Layout from "../components/layout";
import { PaletteContext } from "../components/palette-context";
import ColorItem from "../components/color-item";
import Placeholder from "../components/placeholder-block";

const PaletteContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5em;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 680px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Home = () => {
  const { blocks } = useContext(PaletteContext);
  return (
    <Layout>
      <Box width={[1, 1 / 2]} mx="auto" mb={4}>
        <Text as="h2" textAlign="center" mb={1}>
          Create Accessible Color Palettes
        </Text>

        <Text as="p" textAlign="center">
          Use this palette as a starting point. Create, edit or remove color
          blocks!
        </Text>
      </Box>
      <PaletteContainer>
        {blocks.map(({ id, fg, bg }) => {
          if (!fg && !bg) {
            return <Placeholder key={id} blockId={id} />;
          }

          return <ColorItem key={id} fg={fg} bg={bg} blockId={id} />;
        })}
      </PaletteContainer>
    </Layout>
  );
};

export default Home;
