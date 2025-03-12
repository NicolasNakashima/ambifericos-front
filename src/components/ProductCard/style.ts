import styled, { css } from "styled-components";

export const Card = styled.div(
  () => css`
    width: 200px;
    height: 350px;
    background-color: green;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
  `
);

export const ImageCard = styled.img(
  () => css`
    width: 100%;
    height: 40%;
  `
);

export const CardInformations = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 4px;
  `
);

export const ProductName = styled.p(
  () => css`
    font-size: 1rem;
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
    font-size: 0.5rem;
  `
);
