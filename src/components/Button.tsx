import { css } from "@emotion/react"
import { ReactNode } from "react"

export default function Button({ children, ...props }: { children: ReactNode }) {
  return (
    <button
      css={css`
        border: none;
        background: #afeeee;
        padding: 10px;
        border-radius: 10px;
        margin: 0.5rem;
      `}
      {...props}>
      {children}
    </button>
  )
}
