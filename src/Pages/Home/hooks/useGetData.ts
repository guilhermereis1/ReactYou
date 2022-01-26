import { useEffect } from "react";
import { getDataBackend } from "../../../store/data/action";

const useGetData = (dispatch: any): any => {
  useEffect(() => {
    dispatch(getDataBackend());
  }, [dispatch]);
};

export default useGetData;