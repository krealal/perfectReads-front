import { rest } from "msw";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/all`,
    (req, res, ctx) =>
      res(
        ctx.status(200),
        ctx.json([
          {
            name: "luis",
            image: "src/image/1.png",
            score: 4,
            review: "lorem",
          },
          {
            name: "marta",
            image: "src/image/2.png",
            score: 1,
            review: "merol",
          },
        ])
      )
  ),
];
