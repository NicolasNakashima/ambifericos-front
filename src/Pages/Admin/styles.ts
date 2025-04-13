import { Button, Input, TextField } from '@mui/material';
import styled, { css } from 'styled-components';

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
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    `
)

export const ProductDiv = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    `
)

export const AdminDiv = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    `
)



export const Title = styled.p(
    () => css`
    font-size: 30px;
    font-weight: 700;

    `
)

export const ContainerModalNewProduct = styled.div(
    () => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  `
);

export const ContainerForm = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    align-self: stretch;
  `
);

export const StyledTextField = styled(TextField)(
    () => css`
    width: 100%;

  `
);

export const ScrollArea = styled.div(
    () => css`
  max-height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width:100%;
  box-sizing: border-box;

`);
