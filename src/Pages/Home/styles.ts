/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from "styled-components";

export const Wrapper = styled.div(
  () => css`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 3rem;
    margin-top: 150px;
    margin-bottom: 48px;
  `
);

export const RecomendedContainer = styled.div(
  () => css`
    display: flex;
    width: 100%;
    gap: 3rem;
    flex-wrap: wrap;
  `
);
