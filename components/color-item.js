import { useState, useEffect, useContext } from "react";
import Color from "color";
import { Card, Box, Flex, Text } from "@rebass/emotion";
import { hex, score } from "wcag-contrast";
import ColorBlock from "./color-block";
import ToolBox from "./color-toolbox";
import { PaletteContext } from "./palette-context";

export const Block = props => (
  <Card borderRadius={18} p={3} {...props}>
    {props.children}
  </Card>
);

const ColorItem = ({ blockId, fg, bg }) => {
  const { blocks, dispatch } = useContext(PaletteContext);
  const block = blocks.filter(item => !(item.id != blockId))[0];
  const [foreground, setForeground] = useState(fg);
  const [background, setBackground] = useState(bg);
  const [isLight, setContrast] = useState(Color(background).isLight());

  const contrast = hex(foreground, background);

  useEffect(() => {
    dispatch({
      type: "UPDATE_BLOCK",
      payload: {
        blockId,
        fg: foreground,
        bg: background
      }
    });
  }, [foreground, background]);

  console.log(
    `id: ${blockId}, bg: ${background}, fg: ${foreground}, is browser: ${
      process.browser
    }`
  );

  return (
    <Block bg={background} color={foreground}>
      <ToolBox blockId={blockId} />
      <Text textAlign="center" fontWeight="bold" fontSize={3}>
        {contrast.toFixed(2)} {score(contrast) || "Fail"}
      </Text>
      <Flex>
        <Box width={1 / 2} py={2} pr={2}>
          <ColorBlock
            isLight={isLight}
            setContrast={setContrast}
            inputColor={foreground}
            name="Text"
            color={foreground}
            setColor={setForeground}
            blockId={blockId}
          />
        </Box>
        <Box width={1 / 2} py={2} pl={2}>
          <ColorBlock
            isLight={isLight}
            setContrast={setContrast}
            inputColor={foreground}
            name="Background"
            color={background}
            setColor={setBackground}
            blockId={blockId}
          />
        </Box>
      </Flex>
    </Block>
  );
};

export default ColorItem;
