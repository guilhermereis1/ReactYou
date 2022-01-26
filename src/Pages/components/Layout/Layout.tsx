import React, { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children?: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
