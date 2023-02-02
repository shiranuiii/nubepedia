import { css } from "@emotion/react"
import { useAtom } from "jotai"
import { GetServerSideProps } from "next"

import Button from "~/components/Button"
import Layout from "~/components/Layout"
import { tempPostAtom } from "~/libs/atoms"
import { getPosts, Post } from "~/models/Post"

type Props = {
  posts: Post[]
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const posts = await getPosts({}, 10)
  return { props: { posts } }
}

function PostPreview({ text, authorName }) {
  return (
    <div
      css={css`
        display: flex;
        margin: 0.5rem;
        padding: 0.5rem;
        flex-direction: column;
        border-radius: 0.5rem;
        border-top: 2px black;
        background: #f2f2f2;
      `}>
      <span css={css``}>{authorName}</span>
      <hr
        css={css`
          margin: 0;
        `}
      />
      <p
        css={css`
          font-size: 1.2rem;
        `}>
        {text}
      </p>
      <div>
        <Button onClick={() => navigator.clipboard.writeText(text)}>
          Copy
        </Button>
      </div>
    </div>
  )
}

export default function IndexPage({ posts }: Props) {
  const [tempPosts] = useAtom(tempPostAtom)

  return (
    <Layout>
      <h1>hello!</h1>
      <h2>latest posts</h2>
      {tempPosts.map((post, i) => (
        <PostPreview key={i} {...post} />
      ))}
    </Layout>
  )
}
