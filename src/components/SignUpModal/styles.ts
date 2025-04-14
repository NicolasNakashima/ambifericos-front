import styled, { css } from "styled-components";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const Wrapper = styled.div(
    () => css`
    display: flex;
    border-radius: 0.5rem;
    width: 30rem;
    height: 30rem;
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    color: #fff;
    background-color: #fff;
    margin: 2rem;
  `
);


export const TextFieldStyled = styled(TextField)(
    () => css`
    width: 90%;
  `
);

export const ButtonStyled = styled(Button)(
    () => css`
    width: 90%;
    margin-top: 2rem;
    background: #4eb0e6;
background: linear-gradient(90deg, rgba(78, 176, 230, 1) 0%, rgba(92, 250, 255, 1) 100%, rgba(120, 249, 243, 1) 63%, rgba(196, 245, 210, 1) 100%);
  `
);

export const StyledTitle = styled.h1(
    () => css`
    color: black;
  `
);