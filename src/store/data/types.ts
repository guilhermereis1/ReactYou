import { Link } from "../../Interfaces/Iurl";

export enum DataActionTypes {
  LOAD_REQUEST = "@@data/LOAD_REQUEST",
  LOAD_SUCCESS = "@@data/LOAD_SUCCESS",
  LOAD_ERROR = "@@data/LOAD_ERROR",
}

export interface DataState {
  readonly loading: boolean;
  readonly data: Link[];
  readonly errors?: string;
}
