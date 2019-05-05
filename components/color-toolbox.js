/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Flex, Button } from "@rebass/emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHamburger,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { PaletteContext } from "./palette-context";

const StrippedButton = styled.button`
  color: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const ToolBox = ({ blockId }) => {
  const { dispatch } = useContext(PaletteContext);
  return (
    <Flex justifyContent="space-between">
      <StrippedButton>
        <FontAwesomeIcon
          icon={faBars}
          css={css`
            justify-self: end;
          `}
        />
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
