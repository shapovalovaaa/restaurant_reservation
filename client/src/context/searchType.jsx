import { createContext, useReducer} from "react";

const INITIAL_STATE = {
    type: undefined,
};

export const SearchByType = createContext(INITIAL_STATE);

const SearchType = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
};

export const SearchTypeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchType, INITIAL_STATE);

    return (
        <SearchByType.Provider value={{
            type: state.type,
            dispatch,
        }}
        >
            {children}
        </SearchByType.Provider>
    );
};