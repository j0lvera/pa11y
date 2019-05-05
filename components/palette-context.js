import { useReducer, createContext } from "react";
import { generate } from "shortid";
import arrayMove from "array-move";

let PaletteContext;
// prettier-ignore
const { Provider } = PaletteContext = createContext();

const initialState = {
  blocks: [
    {
      id: "block-1",
      fg: "#333652",
      bg: "#90adc6"
    },
    {
      id: "block-2",
      fg: "#333652",
      bg: "#e9eaec"
    },
    {
      id: "block-3",
      fg: "#333652",
      bg: "#fad02c"
    },
    {
      id: "block-4",
      fg: "#e9eaec",
      bg: "#333652"
    },
    {
      id: "block-5",
      fg: "#fad02c",
      bg: "#333652"
    }
  ]
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_BLOCK":
      return {
        blocks: [
          ...state.blocks.filter(block => block.fg && block.bg),
          {
            id: payload.blockId,
            fg: payload.fg,
            bg: payload.bg
          },
          { id: generate(), fg: "", bg: "" }
        ]
      };
    case "REMOVE_BLOCK":
      return {
        blocks: [...state.blocks.filter(block => block.id !== payload.blockId)]
      };
    case "UPDATE_BLOCK":
      return {
        blocks: state.blocks.map(block => {
          if (block.id !== payload.blockId) {
            return block;
          }

          return {
            ...block,
            id: payload.newId || block.id,
            fg: payload.fg,
            bg: payload.bg
          };
        })
      };
    case "MOVE_BLOCK":
      return {
        blocks: arrayMove(state.blocks, payload.from, payload.to)
      };
    default:
      throw new Error();
  }
};

const PaletteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { PaletteProvider, PaletteContext };
