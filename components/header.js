import { Global, css } from "@emotion/core";
import { Box, Text } from "@rebass/emotion";
import Head from "./head";

// const Head = ({ description, url, title, ogImage }) => (
const Header = () => {
  return (
    <Box as="header" py={4}>
      <Head
        title="Pa11y - A tool to generate accessible color palettes"
        description="Generate color palettes and check WCAG color contrast ratio for each combination"
        url="https://pa11y.com"
        ogImage=""
      />

      <Text as="h1" textAlign="center" mt={0}>
        Pa11y
      </Text>

      <Text as="p" textAlign="center">
        Create Accessible Color Palettes
      </Text>

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
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
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
