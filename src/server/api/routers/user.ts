import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUserInfo: publicProcedure.query(async ({ ctx }) => {
    const id = ctx.auth.userId as string;
    return await ctx.db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });
  }),
});
