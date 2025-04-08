import styled, { css } from "styled-components";

export const Card = styled.div(
  () => css`
    width: 100%;
    height: 150px;
    display: flex;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
  `
);

export const ImageCard = styled.img(
  () => css`
    width: 30%;
  `
);

export const CardInformations = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 1rem;
    background-color: wheat;
    border: 1px solid lightgray;
  `
);

export const ProductName = styled.p(
  () => css`
    font-size: 1.5rem;
  `
);

export const ProductPrice = styled.p(
  () => css`
    font-size: 2rem;
    font-weight: 600;
  `
);

export const ProductDescription = styled.p(
  () => css`
    font-size: 1rem;
  `
);
