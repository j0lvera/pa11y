import PropTypes from "prop-types";
import { Text } from "@rebass/emotion";

const EditControl = ({ name, value, max, step, handler }) => (
  <>
    <Text as="label" htmlFor={name} textAlign="center">
      {value >= 0 ? value : `${(value * 100).toFixed(2)}`}
    </Text>
    <input
      type="range"
      name={name}
      id={name}
      value={value}
      max={max}
      step={step}
      onChange={handler}
    />
  </>
);

EditControl.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  max: PropTypes.number,
  step: PropTypes.string,
  handler: PropTypes.func.isRequired
};

export default EditControl;
