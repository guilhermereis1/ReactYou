import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
  });
