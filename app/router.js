module.exports = app =>{
  let {router,controller} = app
  router.get('/',controller.home.index)
  router.get('/news',controller.news.index)
}