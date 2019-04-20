import { useReducer, createContext } from "react";
import { generate } from "shortid";

let PaletteContext;
// prettier-ignore
const { Provider } = PaletteContext = createContext();

const initialState = {
  palettes: [
    {
      id: generate(),
      fg: "#004466",
      bg: "#00ffa2"
    }
  ]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return {
        palettes: [
          ...state.palettes,
          {
            id: generate(),
            fg: payload.fg,
            bg: payload.bg
          }
        ]
      };
    case "edit":
      return {
        palettes: state.palettes.map(palette => {
          if (palette.id !== payload.id) {
            return palette;
          }

          return {
            ...palette,
            fg: payload.fg,
            bg: payload.bg
          };
        })
      };
    case "remove":
      return {
        palettes: state.palettes.filter(palette => palette.id !== payload.id)
      };
    default:
      throw new Error();
  }
};

const PaletteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.group("state");
  console.log(state);
  console.groupEnd();

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { PaletteProvider, PaletteContext };
