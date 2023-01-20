import { css } from "@emotion/react"

import Button from "~/components/Button"
import Layout from "~/components/Layout"

export default function PostPage() {
  return (
    <Layout>
      <h1>投稿</h1>
      <textarea
        css={css`
          width: 100%;
          min-height: 16rem;
          resize: none;
          font-size: 1rem;
        `}
        placeholder="✍️( ՞ةڼ◔)"
      />
      <div>
        <Button>Post</Button>
      </div>
    </Layout>
  )
}
