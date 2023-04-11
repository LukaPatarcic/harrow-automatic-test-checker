import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import questions from '../../questions'

export const questionRouter = createTRPCRouter({
  get: publicProcedure
    .input(null)
    .query(({ input }) => {
      return questions;
    }),
});
