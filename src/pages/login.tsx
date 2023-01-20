import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import Layout from "~/components/Layout"

type LoginForm = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "メールアドレスを入力してください" })
    .email({ message: "有効なメールアドレスを入力してください" }),
  passwd: z.string().nonempty({ message: "パスワードを入力してください" }),
})

export default function LoginPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) })

  function onSubmit({ email, passwd }: LoginForm) {
    console.log(email, passwd)
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" placeholder="johndoe@example.net" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="passwd">パスワード</label>
          <input id="passwd" placeholder="パスワード" {...register("passwd")} />
          {errors.passwd && <p>{errors.passwd.message}</p>}
        </div>
        <input type="submit" value="Login" />
      </form>
    </Layout>
  )
}
