import React, { useContext } from "react";
import { Box } from "rebass";
import { Text, Heading } from "../components/content";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Layout from "../components/layout";
import { PaletteContext } from "../components/palette-context";
import ColorItem from "../components/color-item";

const Home = () => {
  const { blocks, dispatch } = useContext(PaletteContext);

  function handleDragEnd({ source, destination }) {
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dispatch({
      type: "MOVE_BLOCK",
      payload: {
        from: source.index,
        to: destination.index
      }
    });
  }

  return (
    <Layout>
      <Box width={[1, 1 / 2]} mx="auto" mb={4} py={3}>
        <Heading as="h2" textAlign="center">
          Create Accessible Color Palettes
        </Heading>

        <Text as="p" textAlign="center">
          Use this palette as a starting point. Create, edit or remove color
          blocks!
        </Text>
      </Box>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div>
          <Droppable droppableId={"row"} direction="horizontal">
            {provided => (
              <Box
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                sx={{
                  display: "grid",
                  gridTemplateColumns: [
                    "1fr",
                    "1fr 1fr",
                    "1fr 1fr 1fr",
                    "1fr 1fr 1fr 1fr 1fr"
                  ],
                  gridTemplateRows: "auto",
                  gridGap: ".5em"
                }}
              >
                {blocks.map(({ id, fg, bg }, index) => (
                  <ColorItem
                    key={id}
                    fg={fg}
                    bg={bg}
                    blockId={id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </Layout>
  );
};

export default Home;
