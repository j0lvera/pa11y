import { useContext } from "react";
import styled from "@emotion/styled";
import { Button } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Block } from "./color-item";
import { PaletteContext } from "../components/palette-context";

const Placeholder = ({ blockId, isButton }) => {
  const { dispatch } = useContext(PaletteContext);
  return (
    <Block bg="#eee" color="#111" minHeight="265.2px">
      {isButton && (
        <Button
          onClick={() =>
            dispatch({
              type: "ADD_BLOCK",
              payload: {
                blockId,
                fg: "#333333",
                bg: "#eeeeee"
              }
            })
          }
        >
          <FontAwesomeIcon icon={faPlus} size="3x" />
        </Button>
      )}
    </Block>
  );
};

export default Placeholder;
