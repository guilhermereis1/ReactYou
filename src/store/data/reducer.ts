import { Reducer } from "redux";
import { DataActionTypes, DataState } from "./types";

export const initialState: DataState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<DataState> = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.LOAD_REQUEST: {
      return { ...state, loading: true };
    }
    case DataActionTypes.LOAD_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case DataActionTypes.LOAD_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as DataReducer };
