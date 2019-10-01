import { useContext } from "react";
import { Box, Flex, Button } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHamburger,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { PaletteContext } from "./palette-context";

const ToolBox = ({ blockId }) => {
  const { dispatch } = useContext(PaletteContext);
  return (
    <Flex justifyContent="space-between">
      <StrippedButton
        sx={{
          color: "inherit",
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer"
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </StrippedButton>

      <StrippedButton
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
      </StrippedButton>
    </Flex>
  );
};

export default ToolBox;
