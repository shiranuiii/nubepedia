import { GetServerSideProps } from "next"

import Layout from "~/components/Layout"
import { getPosts, Post } from "~/models/Post"

type Props = {
  posts: Post[]
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const posts = await getPosts({}, 10)
  return { props: { posts } }
}

export default function IndexPage({ posts }: Props) {
  console.log(posts)
  return (
    <Layout>
      <h1>hello!</h1>
    </Layout>
  )
}
