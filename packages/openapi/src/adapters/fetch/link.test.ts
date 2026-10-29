vi.mock('@orpc/server', () => {
  throw new Error('The OpenAPI Link entry must not load @orpc/server')
})
vi.mock('@orpc/server/fetch', () => {
  throw new Error('The OpenAPI Link entry must not load @orpc/server/fetch')
})
vi.mock('@orpc/server/standard', () => {
  throw new Error('The OpenAPI Link entry must not load @orpc/server/standard')
})
vi.mock('rou3', () => {
  throw new Error('The OpenAPI Link entry must not load rou3')
})

it('exports OpenAPILink without loading server-only modules', async () => {
  await expect(import('@orpc/openapi/fetch/link')).resolves.toMatchObject({
    OpenAPILink: expect.any(Function),
  })
})
