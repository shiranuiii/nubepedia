import { css } from "@emotion/react"
import { ReactNode } from "react"

export default function Button({ children, ...props }: { children: ReactNode }) {
  return (
    <button
      css={css`
      `}
      {...props}>
      {children}
    </button>
  )
}
