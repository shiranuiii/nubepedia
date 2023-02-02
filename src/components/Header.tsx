import { css } from "@emotion/react"
import Link from "next/link"

import Button from "~/components/Button"

function Logo() {
  return (
    <div>
      <span>Nubepedia</span>
    </div>
  )
}

export default function Header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d3d3d3;
        padding: 0.8rem;
        font-size: 2rem;
        font-family: Times New Roman;
      `}>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  )
}
