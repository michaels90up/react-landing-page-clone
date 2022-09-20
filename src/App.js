/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './logo.svg';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  font-family: 'Basier Circle', -apple-system, 'BlinkMacSystemFont', 'Helvetica',
    'Lato', 'Arial', 'Segoe UI', 'Verdana', sans-serif;
  background-color: #fff;
`;
const headerStyles = css`
  background-color: #e6fff3;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  justify-content: space-between;
  position: fixed;
  padding: 40px 48px;
  padding-top: 16px;
  padding-bottom: 16px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 1;
`;

const optionStyles = css`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  height: 24px;
  padding: 12px;
  color: #382e2c;
  border-bottom: 2px solid #56e7a5;
`;
const normalButtonStyles = css``;
const redButtonStyles = css`
  background-color: #ff5059;
  border-color: #ff5059;
  width: 197.55px;
  height: 48px;
  border-radius: 8px;
`;

export default function App() {
  return (
    <body css={globalStyles}>
      <header css={headerStyles}>
        <Logo />
        <div css={optionStyles}>
          <div>Product</div>
          <div>Solutions</div>
          <div>Customer stories</div>
          <div>Pricing</div>
          <div>Resources</div>
          <div>About us</div>
          <div>Log in</div>
        </div>
        <button css={normalButtonStyles}>Menu</button>
        <button css={redButtonStyles}>Sign up for Free</button>
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </body>
  );
}
