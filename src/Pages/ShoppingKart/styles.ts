import { Button } from "@mui/material";
import styled, { css } from "styled-components";

export const Wrapper = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 3rem;
    margin-top: 150px;
    margin-bottom: 48px;
    width: 100%;
  `
);

export const ContainerProductsKart = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
  `
);

export const StyledButton = styled(Button)(
  () => css`
  padding: 10px;
  
  `
)


