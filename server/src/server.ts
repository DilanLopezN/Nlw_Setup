import Fastify from 'fastify'

const app = Fastify()

app.listen({
  port: 3000
})

app.get('/', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
