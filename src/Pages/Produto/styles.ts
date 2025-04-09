import { Button } from '@mui/material';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div(
    () => css`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 3rem;
    width: 100%;
    
    `
)

export const Container = styled.div(
    () => css`

    display: flex;
    max-width: 1400px;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-top: 150px;
    margin-bottom: 48px;
    
    
    `
)

export const ImageAndDesc = styled.div(
    () => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    `
)

export const description = styled.div(
    () => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
    `
)

export const Title = styled.p(
    () => css`
    font-size: 22px;
    font-weight: 600;
    `
)

export const Price = styled.p(
    () => css`
    font-size: 36px;
    font-weight: 400;
    `
)

export const GeneralInfo = styled.p(
    () => css`
    font-size: 14px;
    font-weight: 400;
    `
)

export const Image = styled.img(
    () => css`
    width: 700px;
    height: 400px;
    `
)

export const StyledButton = styled(Button)(
    () => css`
    padding: 10px;
    
    `
)