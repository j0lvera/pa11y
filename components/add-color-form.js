import { useState, useContext } from "react";
import { PaletteContext } from "../components/palette-context";

const AddColorForm = () => {
  const [colors, setColors] = useState({ fg: "", bg: "" });
  const { dispatch } = useContext(PaletteContext);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: "add",
      payload: colors
    });
  };

  const handleForeground = event =>
    setColors({ fg: event.target.value, bg: colors.bg });
  const handleBackground = event =>
    setColors({ bg: event.target.value, fg: colors.fg });

  return (
    <form method="post" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="foreground">Foreground</label>
        <input
          id="foreground"
          name="foreground"
          type="text"
          onChange={handleForeground}
          required
        />
      </fieldset>

      <fieldset>
        <label htmlFor="background">Background</label>
        <input
          id="background"
          name="background"
          type="text"
          onChange={handleBackground}
          required
        />
      </fieldset>

      <button>Add</button>
    </form>
  );
};
export default AddColorForm;
