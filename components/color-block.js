/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { Box, Flex, Text } from "@rebass/emotion";
import hslToHex from "hsl-to-hex";
import hexToHsl from "hex-to-hsl";
import EditControl from "./edit-control";

const Column = ({ children }) => <Flex flexDirection="column">{children}</Flex>;

const ColorBlock = ({ name, color, setColor }) => {
  const [hex, setHex] = useState(color);
  const [h, s, l] = hexToHsl(hex);
  const [hsl, setHSL] = useState({ h, s: s / 100, l: l / 100 });

  function handleHsl(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "hue":
        setHSL({ ...hsl, h: value });
        break;
      case "saturation":
        setHSL({ ...hsl, s: value });
        break;
      case "lightness":
        setHSL({ ...hsl, l: value });
        break;
    }

    const newSaturation = hsl.s <= 1 ? hsl.s * 100 : hsl.s;
    const newLightness = hsl.l <= 1 ? hsl.l * 100 : hsl.l;
    const newColor = hslToHex(hsl.h, newSaturation, newLightness);
    setHex(newColor);
    setColor(newColor);
  }

  function handleHex(e) {
    const value = e.target.value;
    const [h, s, l] = hexToHsl(value);

    setHex(value);
    setHSL({ h, s, l });

    if (value.length === 7) {
      setColor(value);
    }
  }

  return (
    <Box as="form" p={3}>
      <Column>
        <Text textAlign="center" mb={2}>
          {name}
        </Text>
        <input
          css={css`
            background-color: transparent;
            border: 0;
          `}
          type="text"
          name="fg"
          value={hex}
          autoComplete="off"
          onChange={handleHex}
        />

        <EditControl name="hue" value={hsl.h} max={360} handler={handleHsl} />
      </Column>

      <Column>
        <EditControl
          name="saturation"
          value={hsl.s}
          max={1.0}
          step="0.00390625"
          handler={handleHsl}
        />
      </Column>

      <Column>
        <EditControl
          name="lightness"
          value={hsl.l}
          max={1.0}
          step="0.00390625"
          handler={handleHsl}
        />
      </Column>
    </Box>
  );
};

export default ColorBlock;
