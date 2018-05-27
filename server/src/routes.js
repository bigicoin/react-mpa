import articles from './articles';

module.exports = ({ app, render }) => {
  app.get('/', (req, res) => {
    res.send(render.home({ name: 'Wilson' }))
  })

  app.get('/about', (req, res) => {
    res.send(render.about())
  })

  app.get('/articles/:id', async (req, res) => {
    articles(req, res, render);
  })

  app.get('*', (req, res, next) => {
    const error = new Error('page not found')
    error.status = 404
    next(error)
  })

  app.use((err, req, res, next) => { // eslint-disable-line
    const {
      status = 500,
      message,
    } = err

    res.status(status).send(render.error({
      status,
      message,
    }))
  })
}
