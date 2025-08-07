import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {},
  async handler(ctx, args_0) {
    const identity = ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Not Authenticated");
    }
  },
});
