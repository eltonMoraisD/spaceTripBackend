import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'hello words'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on http://localhost:3333')
  })
