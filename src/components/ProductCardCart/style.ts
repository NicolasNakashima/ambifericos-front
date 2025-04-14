import styled, { css } from "styled-components";

export const Card = styled.div(
    () => css`
    width: 100%;
    height: 200px;
    display: flex;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid var(--Border-input, #E2E6EA);
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.10);
  `
);

export const ImageCard = styled.img(
    () => css`
    width: 20%;
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
    justify-content: center;
  `
);

export const ProductName = styled.p(
    () => css`
    font-size: 1.5rem;
    font-weight: 600;
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

export const InfoAndAction = styled.div(
    () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    `
)

export const styledCounter = styled.div(
    () => css`
    display: flex;
    padding: 3px;
    align-items: center;
    border: 1px solid var(--Border-input, #E2E6EA);
    border-radius: 30px;
    `
)

export const counterTitle = styled.p(
    () => css`
    font-size: 20px;
    font-weight: 700;
  `
)

export const counterAndButton = styled.div(
    () => css`
    display: flex;
    align-items: center;
    gap: 20px;
    `
)