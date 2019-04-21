import React, { useContext } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Box } from "@rebass/emotion";
import Layout from "../components/layout";
import { PaletteContext } from "../components/palette-context";
import ColorItem from "../components/color-item";

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
  const { palettes } = useContext(PaletteContext);
  return (
    <Layout>
      <PaletteContainer>
        {palettes.map(({ id, fg, bg }) => (
          <ColorItem key={id} id={id} fg={fg} bg={bg} />
        ))}
      </PaletteContainer>
    </Layout>
  );
};

export default Home;
