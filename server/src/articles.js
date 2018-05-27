
export default async (req, res, render) => {
  const { params: { id } } = req

  const articles = {
    1: {
      title: 'Article One Title',
      body: 'Article one body',
    },
    2: {
      title: 'Article Two Title',
      body: 'Article two body',
    },
  }

  const article = articles[id]
  res.send(render.article(article))
}
