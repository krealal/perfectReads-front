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
            id: "123",
          },
          {
            name: "marta",
            image: "src/image/2.png",
            score: 1,
            review: "merol",
            id: "1233124",
          },
        ])
      )
  ),

  rest.delete(
    `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/123`,
    (req, res, ctx) => res(ctx.status(200), ctx.json({}))
  ),
  rest.delete(
    `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/12`,
    (req, res, ctx) => res(ctx.status(404), ctx.json({}))
  ),

  rest.post(
    `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/new-post`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          name: "marta",
          image: "src/image/2.png",
          score: 1,
          review: "merol",
          id: "1233124",
        })
      );
    }
  ),

  rest.put(
    `${process.env.NEXT_PUBLIC_PERFECTREADS_API}/reviews/123`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          name: "luis",
          image: "src/image/1.png",
          score: 4,
          review: "lorem",
          id: "123",
        })
      );
    }
  ),
];
