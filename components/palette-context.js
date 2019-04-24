import { useReducer, createContext } from "react";
import { generate } from "shortid";

let PaletteContext;
// prettier-ignore
const { Provider } = PaletteContext = createContext();

const initialState = {
  palettes: [
    {
      id: generate(),
      position: 1,
      blocks: [
        {
          id: generate(),
          position: 0,
          fg: "#333652",
          bg: "#90adc6"
        },
        {
          id: generate(),
          position: 1,
          fg: "#333652",
          bg: "#e9eaec"
        },
        {
          id: generate(),
          position: 3,
          fg: "#333652",
          bg: "#fad02c"
        },
        {
          id: generate(),
          position: 4,
          fg: "#e9eaec",
          bg: "#333652"
        },
        {
          id: generate(),
          position: 5,
          fg: "#fad02c",
          bg: "#333652"
        }
      ]
    },
    {
      id: generate(),
      position: 2,
      blocks: [
        {
          id: generate(),
          position: 0,
          fg: "#ffffff",
          bg: "#13c3f7"
        },
        {
          id: generate(),
          position: 1,
          fg: "#ffffff",
          bg: "#ff2768"
        },
        {
          id: generate(),
          position: 3,
          fg: "#111111",
          bg: "#e9e9e7"
        },
        {
          id: generate(),
          position: 4,
          fg: "#111111",
          bg: "#fff387"
        },
        {
          id: generate(),
          position: 5,
          fg: "",
          bg: ""
        }
      ]
    }
  ]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_BLOCK":
      return {
        palettes: state.palettes.map(palette => {
          if (palette.id !== payload.paletteId) {
            return palette;
          }

          return {
            ...palette,
            blocks: palette.blocks.map(block => {
              if (block.id !== payload.block.blockId) {
                return block;
              }

              return {
                ...block,
                fg: payload.block.fg,
                bg: payload.block.bg
              };
            })
          };
        })
      };

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
