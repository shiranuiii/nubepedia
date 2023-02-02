import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import Layout from "~/components/Layout"

type RegisterForm = z.infer<typeof registerSchema>

const registerSchema = z
  .object({
    email: z
      .string()
      .nonempty({ message: "メールアドレスを入力してください" })
      .email({ message: "有効なメールアドレスを入力してください" }),
    passwd: z
      .string()
      .min(8, { message: "少なくとも8文字の長さが必要です" })
      .regex(/(?=.*[A-Za-z])(?=.*\d)/, {
        message: "半角アルファベットと半角数字を含んでください",
      }),
    confirm: z
      .string()
      .nonempty({ message: "パスワードをもう一度入力してください" }),
    terms: z.boolean(),
  })
  .refine(data => data.passwd === data.confirm, {
    message: "パスワードが一致しません",
    path: ["confirm"],
  })

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) })

  return (
    <Layout>
      <h1>Register</h1>
    </Layout>
  )
}
