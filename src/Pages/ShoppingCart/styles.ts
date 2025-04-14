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

export const Container = styled.div(
  () => css`
    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
  `
);

export const ContainerProductsCart = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
    width: 100%;
    justify-content: center;
  `
);

export const StyledButton = styled(Button)(
  () => css`
    padding: 10px;
  `
);
