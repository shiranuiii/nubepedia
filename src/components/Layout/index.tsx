import { css } from "@emotion/react"
import { ReactNode } from "react"

import Header from "~/components/Header"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}>
      <div
        css={css`
          width: 100%;
          max-width: 64rem;
          margin: 0 auto;
        `}>
        <Header />
        {children}
      </div>
      <footer
        css={css`
          margin-top: auto;
          padding: 1rem 0;
          text-align: center;
          background: dimgray;
          color: white;
          font-weight: bold;
        `}>
        &copy; 2023 majikiti
      </footer>
    </div>
  )
}
