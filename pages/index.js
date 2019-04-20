import React, { useContext } from "react";
import Layout from "../components/layout";
import { PaletteContext } from "../components/palette-context";
import AddColorForm from "../components/add-color-form";
import ColorItem from "../components/color-item";

const Home = () => {
  const { palettes } = useContext(PaletteContext);
  // console.log("palettes:", palettes);
  return (
    <Layout>
      <h1>Pa11y</h1>

      {palettes.map(({ id, fg, bg }) => (
        <ColorItem key={id} id={id} fg={fg} bg={bg} />
      ))}

      <AddColorForm />
    </Layout>
  );
};

export default Home;
