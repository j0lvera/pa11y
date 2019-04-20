import React, { useContext } from "react";
import { Flex } from "@rebass/emotion";
import Layout from "../components/layout";
import { PaletteContext } from "../components/palette-context";
import AddColorForm from "../components/add-color-form";
import ColorItem from "../components/color-item";

const Home = () => {
  const { palettes } = useContext(PaletteContext);
  return (
    <Layout>
      <h1>Pa11y</h1>

      <p>Create Accessible Color Palettes</p>

      <Flex>
        {palettes.map(({ id, fg, bg }) => (
          <ColorItem key={id} id={id} fg={fg} bg={bg} />
        ))}
      </Flex>

      <AddColorForm />
    </Layout>
  );
};

export default Home;
