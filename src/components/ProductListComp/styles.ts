import { Avatar } from "@mui/material";
import styled, { css } from "styled-components";


export const Wrapper = styled.div(
    () => css`
    display: flex;
    align-content: center;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    `
)

export const AvatarAndName = styled.div(
    () => css`
    display: flex;
    align-items: center;
    gap: 10px;
    `
)

export const SyledAvatar = styled(Avatar)(
    () => css`
    width: 56px;
    height: 56px;
    `
)

export const StyledName = styled.p(
    () => css`
    font-size: 16px;
    font-weight: 600;
    `
)