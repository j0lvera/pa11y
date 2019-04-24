import { useState } from "react";
import Color from "color";
import { Card, Box, Flex, Text } from "@rebass/emotion";
import { hex, score } from "wcag-contrast";
import ColorBlock from "./color-block";
import ToolBox from "./color-toolbox";

export const Block = props => (
  <Card borderRadius={18} p={3} {...props}>
    {props.children}
  </Card>
);

const ColorItem = ({ blockId, fg, bg }) => {
  const [foreground, setForeground] = useState(fg);
  const [background, setBackground] = useState(bg);
  const [isLight, setContrast] = useState(Color(background).isLight());

  const contrast = hex(foreground, background);

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
          />
        </Box>
      </Flex>
    </Block>
  );
};

export default ColorItem;
