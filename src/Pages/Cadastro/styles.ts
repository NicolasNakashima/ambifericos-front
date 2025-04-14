import styled, { css } from "styled-components";

export const Wrapper = styled.div(
    () => css`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4eb0e6;
background: linear-gradient(90deg,rgba(78, 176, 230, 1) 0%, rgba(92, 250, 255, 1) 50%, rgba(196, 245, 210, 1) 100%);
    
  `
);

export const Container = styled.div(
    () => css`
    display: flex;
    max-width: 1400px;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    `
)