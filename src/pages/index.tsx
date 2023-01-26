import { GetServerSideProps } from "next"
import { useAtom } from "jotai"
import { css } from "@emotion/react"

import Layout from "~/components/Layout"
import { getPosts, Post } from "~/models/Post"
import { tempPostAtom } from "~/libs/atoms"

type Props = {
  posts: Post[]
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getPosts({}, 10)
  return { props: { posts } }
}

function PostPreview({ text, authorName }) {
  return (
    <div
      css={css`
        display: flex;
        padding: 0.5rem;
        flex-direction: column;
        border-radius: 0.5rem;
        border: 2px solid black;
      `}
    >
      <span css={css``}>{authorName}</span>
      <hr
        css={css`
          margin: 0;
        `}
      />
      <p
        css={css`
          font-size: 1.5rem;
        `}
      >
        {text}
      </p>
    </div>
  )
}

export default function IndexPage({ posts }: Props) {
  const [tempPosts] = useAtom(tempPostAtom)
  console.log(posts)
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
