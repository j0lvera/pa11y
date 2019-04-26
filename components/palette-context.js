import { useEffect, useReducer, createContext } from "react";
import { generate } from "shortid";

let PaletteContext;
// prettier-ignore
const { Provider } = PaletteContext = createContext();

const initialState = {
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
    },
    {
      id: generate(),
      position: 6,
      fg: "",
      bg: ""
    }
  ]
};

const setStorage = (key, value) => {
  if (process.browser) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

const getStorage = key => {
  if (process.browser) {
    return JSON.parse(window.localStorage.getItem(key));
  }
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
    case "UPDATE_STORE":
      if (process.browser) {
        setStorage("pa11y", state);
      }
      return state;
    case "UPDATE_BLOCK":
      return {
        blocks: state.blocks.map(block => {
          if (block.id !== payload.blockId) {
            return block;
          }

          return {
            ...block,
            fg: payload.fg,
            bg: payload.bg
          };
        })
      };
    default:
      throw new Error();
  }
};

const PaletteProvider = ({ children }) => {
  // const persistedState = process.browser
  // ? getStorage("pa11y") || initialState // if storage is precent but empty use initial state
  // : initialState;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // setStorage("pa11y", state);

    return () => {
      // setStorage("pa11y", state);
    };
  }, [state]);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { PaletteProvider, PaletteContext };
