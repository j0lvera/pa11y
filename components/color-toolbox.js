import { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Button } from "@rebass/emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCog, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { PaletteContext } from "./palette-context";

const CloseButton = styled.button`
  color: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const ToolBox = ({ blockId }) => {
  const { dispatch } = useContext(PaletteContext);
  return (
    <Flex justifyContent="end">
      <CloseButton
        onClick={() =>
          dispatch({
            type: "REMOVE_BLOCK",
            payload: {
              blockId
            }
          })
        }
      >
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
    </Flex>
  );
};

export default ToolBox;
