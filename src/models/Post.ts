import prisma from "~/libs/db"
export { Post, Prisma } from "~/libs/db"

export async function getPosts(where: Prisma.PostWhereInput, take?: number) {
  return prisma.post.findMany({ where, take })
}
