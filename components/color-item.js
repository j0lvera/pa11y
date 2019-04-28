/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { generate } from "shortid";
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
  const [foreground, setForeground] = useState(fg);
  const [background, setBackground] = useState(bg);
  const [isLight, setContrast] = useState(Color(background).isLight());
  const [isDraggable, setDraggable] = useState(false);

  const contrast = hex(foreground, background);
  console.log(blockId, fg, bg);

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

  function handleDragStart(event, blockId) {
    // event.target.style.display = "none";
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text/plain", blockId);
  }

  function handleDrop(event, currentBlockId) {
    event.preventDefault();
    event.stopPropagation();

    const droppedBlockId = event.dataTransfer.getData("text");

    if (droppedBlockId === currentBlockId) {
      return;
    }

    const currentBlock = blocks.filter(block => block.id === currentBlockId)[0];
    const droppedBlock = blocks.filter(block => block.id === droppedBlockId)[0];

    console.log(
      `making ${currentBlockId} fg: ${droppedBlock.fg} bg: ${droppedBlock.bg}`
    );

    dispatch({
      type: "UPDATE_BLOCK",
      payload: {
        blockId: currentBlockId,
        newId: generate(),
        fg: droppedBlock.fg,
        bg: droppedBlock.bg
      }
    });

    console.log(
      `making ${droppedBlockId} fg: ${currentBlock.fg} bg: ${currentBlock.bg}`
    );

    dispatch({
      type: "UPDATE_BLOCK",
      payload: {
        blockId: droppedBlockId,
        newId: generate(),
        fg: currentBlock.fg,
        bg: currentBlock.bg
      }
    });

    return false;
  }

  function handleDragOver(event) {
    event.preventDefault();

    setDraggable(false);
    return false;
  }

  function handleDragEnter(event) {
    // current hover target
  }

  function handleDragLeave(event) {
    // previous target element
  }

  function handleDragEnd(event) {
    // target is the source node
  }

  return (
    <Block
      bg={bg}
      color={fg}
      draggable={isDraggable}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragStart={e => handleDragStart(e, blockId)}
      onDragOver={handleDragOver}
      onDrop={e => handleDrop(e, blockId)}
      onDragEnd={handleDragEnd}
    >
      <ToolBox blockId={blockId} setDraggable={setDraggable} />
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
  );
};

export default ColorItem;
