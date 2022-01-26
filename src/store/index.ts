import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { RouterState } from "connected-react-router";

import { DataReducer } from "./data/reducer";
import { DataState } from "./data/types";
export interface ApplicationState {
  data: DataState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    data: DataReducer,
    router: connectRouter(history),
  });
