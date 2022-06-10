import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      }

      html 
      ,body{
        min-height: 100%;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
      }
    `}
  />
)
