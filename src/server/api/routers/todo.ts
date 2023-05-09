import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { todoInput } from "../../../types";
import { z } from "zod";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.prisma.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
    console.log(todos.map(({ id, text, done }) => ({ id, text, done })));
    return [
      {
        id: "fake",
        text: "fake text",
        done: false,
      },
      {
        id: "fake 2",
        text: "fake text 2",
        done: true,
      },
    ];
  }),
  create: protectedProcedure
    .input(todoInput)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.create({
        data: {
          text: input,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.delete({
        where: { id: input },
      });
    }),
  toggle: protectedProcedure
    .input(z.object({ id: z.string(), done: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          done: input.done,
        },
      });
    }),
});
