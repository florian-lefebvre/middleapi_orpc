it('exports OpenAPIHandler', async () => {
  await expect(import('.')).resolves.toMatchObject({
    OpenAPIHandler: expect.any(Function),
  })
})

it('does not export OpenAPILink', async () => {
  await expect(import('.')).resolves.not.toHaveProperty('OpenAPILink')
})
