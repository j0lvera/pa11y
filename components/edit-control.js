/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Text } from "@rebass/emotion";
// import styled from "@emotion/styled";

const EditControl = ({ isLight, name, value, max, step, handler }) => (
  <>
    <Text as="label" htmlFor={name} textAlign="center">
      {name}: {value >= 1 ? value : `${(value * 100).toFixed(2)}`}
    </Text>
    <input
      type="range"
      name={name}
      id={name}
      value={value}
      max={max}
      step={step}
      onChange={handler}
      className={isLight ? "range-light" : "range-dark"}
    />
  </>
);

EditControl.propTypes = {
  isLight: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  step: PropTypes.string,
  handler: PropTypes.func.isRequired
};

export default EditControl;
