/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Color from "color";
import { useState } from "react";
import { Box, Flex, Text } from "@rebass/emotion";
import hslToHex from "hsl-to-hex";
import hexToHsl from "hex-to-hsl";
import EditControl from "./edit-control";

const Column = ({ children }) => <Flex flexDirection="column">{children}</Flex>;

const ColorBlock = ({
  isLight,
  setContrast,
  inputColor,
  name,
  color,
  setColor
}) => {
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

    setContrast(Color(newColor).isLight());
    setHex(newColor);
    setColor(newColor);
  }

  function handleHex(e) {
    const value = e.target.value;
    const [h, s, l] = hexToHsl(value);

    setHex(value);
    setHSL({ h, s, l });

    if (value.length === 7) {
      setContrast(Color(newColor).isLight());
      setColor(value);
    }
  }

  return (
    <Box as="form">
      <Column>
        <Flex
          as="fieldset"
          p={0}
          flexDirection="column"
          css={{
            border: 0
          }}
        >
          <Text as="label" for="color" textAlign="center">
            {name}
          </Text>
          <Text
            as="input"
            fontSize={3}
            textAlign="center"
            color={inputColor}
            bg="transparent"
            my={2}
            width={1}
            css={{
              border: 0
            }}
            type="text"
            id="color"
            name="color"
            value={hex}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="off"
            pattern="^#[0-9a-f]"
            required="true"
            onChange={handleHex}
          />
        </Flex>

        <EditControl
          isLight={isLight}
          name="hue"
          value={hsl.h}
          max={360}
          handler={handleHsl}
        />
      </Column>

      <Column>
        <EditControl
          isLight={isLight}
          name="saturation"
          value={hsl.s}
          max={1.0}
          step="0.00390625"
          handler={handleHsl}
        />
      </Column>

      <Column>
        <EditControl
          isLight={isLight}
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
