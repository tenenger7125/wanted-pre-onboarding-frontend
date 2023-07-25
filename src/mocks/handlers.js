import { rest } from "msw";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handlers = [
  rest.get("https://www.pre-onboarding-selection-task.shop/todos", (req, res, ctx) => {
    return res(
      ctx.json([
        // {
        //   id: 18520,
        //   todo: "원티드 프리온보딩 사전과제",
        //   isCompleted: false,
        //   userId: 6825,
        // },
        // {
        //   id: 18521,
        //   todo: "원티드 프리온보딩 Jest 기술 스택 적용하기",
        //   isCompleted: false,
        //   userId: 6825,
        // },
      ])
    );
  }),
  rest.post("https://www.pre-onboarding-selection-task.shop/todos", async (req, res, ctx) => {
    const { todo } = await req.json();

    return res(
      ctx.json({
        id: 1,
        todo,
        isCompleted: false,
        userId: 6825,
      })
    );
  }),
];
