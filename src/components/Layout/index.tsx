import { css } from "@emotion/react"
import { ReactNode } from "react"

import Header from "~/components/Header"

import style from "./index.module.css"

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
      <footer className={style.footer}>
        &copy; 2023 majikiti
      </footer>
    </div>
  )
}
