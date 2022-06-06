import { css, Global } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
)
