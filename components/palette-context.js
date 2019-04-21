import { useReducer, createContext } from "react";
import { generate } from "shortid";

let PaletteContext;
// prettier-ignore
const { Provider } = PaletteContext = createContext();

const initialState = {
  palettes: [
    {
      id: generate(),
      fg: "#333652",
      bg: "#90adc6"
    },
    {
      id: generate(),
      fg: "#333652",
      bg: "#e9eaec"
    },
    {
      id: generate(),
      fg: "#333652",
      bg: "#fad02c"
    },
    {
      id: generate(),
      fg: "#e9eaec",
      bg: "#333652"
    },
    {
      id: generate(),
      fg: "#fad02c",
      bg: "#333652"
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
