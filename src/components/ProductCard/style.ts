import styled, { css } from "styled-components";

export const Card = styled.div(
  () => css`
    width: 200px;
    max-height: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  `
);

export const ImageCard = styled.img(
  () => css`
    width: 100%;
    min-height: 45%;
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
    overflow: auto;
  `
);

export const ProductName = styled.p(
  () => css`
    font-size: 1.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  `
);

export const ProductPrice = styled.p(
  () => css`
    font-size: 1.5rem;
    font-weight: 600;
  `
);

export const ProductDescription = styled.p(
  () => css`
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  `
);
