import { Content } from "../components/Content/Content";
import { Layout } from "../components/Layout/Layout";
import { Menu } from "../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import useGetData from "./hooks/useGetData";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  {useGetData(dispatch)} 

  const stateData = useSelector((state: ApplicationState) => state.data);

  return (
    <Layout>
      <Menu />
      {!stateData?.loading && <Content data={stateData?.data} />}
    </Layout>
  );
};

export default Home;
