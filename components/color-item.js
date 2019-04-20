import { useState, useContext, useEffect } from "react";
import { Box, Flex, Text } from "@rebass/emotion";
import { hex, score } from "wcag-contrast";
import ColorBlock from "./color-block";

const ColorItem = ({ id, fg, bg }) => {
  const [foreground, setForeground] = useState(fg);
  const [background, setBackground] = useState(bg);

  const contrast = hex(foreground, background);

  return (
    <Box bg={background} color={foreground} width={1 / 4}>
      <Text textAlign="center" py={3}>
        {contrast.toFixed(2)} {score(contrast) || "Fail"}
      </Text>
      <Flex>
        <Box width={1 / 2} p={2}>
          <ColorBlock name="Text" color={fg} setColor={setForeground} />
        </Box>
        <Box width={1 / 2} p={2}>
          <ColorBlock name="Background" color={bg} setColor={setBackground} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ColorItem;
