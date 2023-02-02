import { css } from "@emotion/react"
import { useAtom } from "jotai"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"

import { tempPostAtom } from "~/libs/atoms"
import Button from "~/components/Button"
import Layout from "~/components/Layout"

function PostButton({ children, ...props }) {
  return (
    <button
      css={css`
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        padding: 10px;
        margin: 10px;
        border: 2px solid white;
        border-radius: 10px;
        background: blue;
        filter: none;
        :hover {
          filter: drop-shadow(5px 5px 0 black);
        }
      `}
      {...props}>
      {children}
    </button>
  )
}

export default function PostPage() {
  const { register, handleSubmit } = useForm()
  const [, setTempPost] = useAtom(tempPostAtom)
  const router = useRouter()

  const onSubmit = ({ body }) => {
    const post = {
      authorName: "名無しの権兵衛",
      text: body,
    }
    console.log(post)
    setTempPost(posts => [post, ...posts])
    router.push("/")
  }

  return (
    <Layout>
      <h1>投稿</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          css={css`
            width: 100%;
            min-height: 16rem;
            resize: none;
            font-size: 1rem;
          `}
          placeholder="✍️( ՞ةڼ◔)"
          {...register("body")}
        />
        <div>
          <PostButton>Post</PostButton>
        </div>
      </form>
    </Layout>
  )
}
