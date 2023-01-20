import { css } from "@emotion/react"
import Link from "next/link"

import Button from "~/components/Button"

function Logo() {
  return (
    <div>
      <span>nubepedia</span>
    </div>
  )
}

export default function Header() {
  return (
    <header
      css={css`
        display: flex;
        justify-content: space-between;
        background: aqua;
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
