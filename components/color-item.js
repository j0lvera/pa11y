import { useState, useContext, useEffect } from "react";
import Color from "color";
import { Card, Box, Flex, Text } from "@rebass/emotion";
import { hex, score } from "wcag-contrast";
import ColorBlock from "./color-block";

const ColorItem = ({ fg, bg }) => {
  const [foreground, setForeground] = useState(fg);
  const [background, setBackground] = useState(bg);
  const [isLight, setContrast] = useState(Color(background).isLight());

  const contrast = hex(foreground, background);

  return (
    <Card bg={background} color={foreground} borderRadius={18} p={2}>
      <Text textAlign="center" fontWeight="bold" fontSize={3}>
        {contrast.toFixed(2)} {score(contrast) || "Fail"}
      </Text>
      <Flex>
        <Box width={1 / 2} p={2}>
          <ColorBlock
            isLight={isLight}
            setContrast={setContrast}
            inputColor={fg}
            name="Text"
            color={fg}
            setColor={setForeground}
          />
        </Box>
        <Box width={1 / 2} p={2}>
          <ColorBlock
            isLight={isLight}
            setContrast={setContrast}
            inputColor={fg}
            name="Background"
            color={bg}
            setColor={setBackground}
          />
        </Box>
      </Flex>
    </Card>
  );
};

export default ColorItem;
