import { Draggable } from "react-beautiful-dnd";
import { useState, useEffect, useContext } from "react";
import Color from "color";
import { Card, Box, Flex, Text } from "rebass";
import { hex, score } from "wcag-contrast";
import ColorBlock from "./color-block";
import ToolBox from "./color-toolbox";
import { PaletteContext } from "./palette-context";

export const Block = props => (
  <Card borderRadius={18} p={3} {...props}>
    {props.children}
  </Card>
);

const ColorItem = ({ blockId, fg, bg, index }) => {
  const { dispatch } = useContext(PaletteContext);
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

  return (
    <Draggable draggableId={blockId} index={index}>
      {provided => (
        <Block
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
          color={fg}
          bg={bg}
        >
          <Text textAlign="center" fontWeight="bold" fontSize={3}>
            {contrast.toFixed(2)} {score(contrast) || "Fail"}
          </Text>
          <Flex>
            <Box width={1 / 2} py={2} pr={2}>
              <ColorBlock
                isLight={isLight}
                setContrast={setContrast}
                name="Text"
                color={fg}
                setColor={setForeground}
                blockId={blockId}
              />
            </Box>
            <Box width={1 / 2} py={2} pl={2}>
              <ColorBlock
                isLight={isLight}
                setContrast={setContrast}
                name="Background"
                color={bg}
                setColor={setBackground}
                blockId={blockId}
              />
            </Box>
          </Flex>
        </Block>
      )}
    </Draggable>
  );
};

export default ColorItem;
