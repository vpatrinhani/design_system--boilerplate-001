import { rest } from 'msw';

const mockApiRootPath = '/mock-api';

export const handlers = [
  rest.post(`${mockApiRootPath}/file-upload`, (req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(200)
    );
  }),

  rest.post(`${mockApiRootPath}/file-upload/sim/error/500`, (req, res, ctx) => {
    return res(
      ctx.delay(3000),
      ctx.status(500)
    );
  })
]
