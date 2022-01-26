import { ContainerLogo, Logo } from "./styles";
import logo_app from "../../../assets/svg/logo.svg";
import { Select } from "antd";
import axios from "axios";
import { useState } from "react";

export const Menu: React.FC = () => {
  const [result, setResults] = useState<any>([]);
  const { Option } = Select;

  async function onSearch(query: any) {
    if (query !== "") {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/search_menu/${query}`
        );
        setResults(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function onChange(value: string) {
    window.open(`https://you.com/search?q=${value}`, "_blank");
  }

  return (
    <ContainerLogo>
      <Logo src={logo_app} alt="" />
      <Select
        style={{ width: "100%" }}
        showSearch
        placeholder="Search a term"
        onSearch={onSearch}
        onChange={onChange}
      >
        {result?.map((item: any, index: number) => (
          <Option value={item} key={index}>
            {item}
          </Option>
        ))}
      </Select>
    </ContainerLogo>
  );
};
