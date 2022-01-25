import React from "react";
import { Result } from "antd";

// import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Result
      // status="500"
      title="Página não encontrada!"
      subTitle="Oops, parece que a página que você procura não existe!"
      // extra={<Button type="primary">Voltar a Home</Button>}
    />
  );
};

export default NotFound;
