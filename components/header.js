/** @jsx jsx */
import { Global, css, jsx } from "@emotion/core";
import { Box, Flex, Text } from "@rebass/emotion";
import Head from "./head";
import Logo from "../static/logo.svg";

const Header = () => {
  return (
    <Box as="header" py={2}>
      <Head
        title="Pa11y - A tool to generate accessible color palettes"
        description="Generate color palettes and check WCAG color contrast ratio for each combination"
        url="https://pa11y.com"
        ogImage=""
      />

      <Flex
        alignItems="center"
        justifyContent="center"
        width={[1, 1 / 2]}
        mx="auto"
      >
        <Logo
          css={css`
            margin-top: -0.5em;
            margin-right: 0.5em;
            transform: rotate(10deg);
          `}
          width="80"
          height="100"
          viewBox="0 0 17 32"
        />
        <Text as="h1" textAlign="center" my={0}>
          Pa11y
        </Text>
      </Flex>

      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            font-size: 20px;
          }

          input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
          }

          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
          }

          input[type="range"]:focus {
            outline: none;
          }

          input[type="range"]::-ms-track {
            width: 100%;
            cursor: pointer;

            background: transparent;
            border-color: transparent;
            color: transparent;
          }

          /* Chrome */
          input[type="range"]::-webkit-slider-thumb {
            border: none;
            border-radius: 50%;
            background: #000;
            cursor: pointer;
            margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
          }

          /* Firefox */
          input[type="range"]::-moz-range-thumb {
            border: 0;
            border-radius: 50%;
            cursor: pointer;
          }

          input[type="range"]:focus::-webkit-slider-thumb,
          input[type="range"]:focus::-moz-range-thumb {
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
          }

          input[type="range"]::-webkit-slider-runnable-track,
          input[type="range"]::-moz-range-track {
            height: 0.5em;
            cursor: pointer;
            border-radius: 3px;
          }

          .range-light::-webkit-slider-thumb,
          .range-light::-moz-range-thumb {
            background: #111;
          }

          .range-light::-webkit-slider-runnable-track,
          .range-light::-moz-range-track {
            background-color: rgba(0, 0, 0, 0.25);
          }

          .range-dark::-webkit-slider-thumb,
          .range-dark::-moz-range-thumb {
            background: #fff;
          }

          .range-dark::-webkit-slider-runnable-track,
          .range-dark::-moz-range-track {
            background-color: rgba(255, 255, 255, 0.25);
          }
        `}
      />
    </Box>
  );
};

export default Header;
