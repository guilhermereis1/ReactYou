import { DataActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getDataBackend: AppThunk = () => async (dispatch: Dispatch) => {
  dispatch({ type: DataActionTypes.LOAD_REQUEST });

  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/you`);

    dispatch({
      type: DataActionTypes.LOAD_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({ type: DataActionTypes.LOAD_ERROR });
  }
};
