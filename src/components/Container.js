import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <Content>{children}</Content>;
};

// Creamos una constante, que es un elemento, boton, div, etc
// lo creamos con style dcomponents y luego lo sustituimos
const Content = styled.div`
  max-width: 1200px;
  padding: 40px;
  margin: 0 auto;
`;
