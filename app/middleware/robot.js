module.exports = (options,app)=>{
  return async function(ctx,next){
    //获取请求头 ctx.get('user-agent') ctx.request.headers['user-agent]
    let userAgent = ctx.get('user-agent')
    let flag = options.ua.some(ua=>ua.test(userAgent))
    ctx.logger.error(userAgent)
    if(flag){
        ctx.status = 403
        ctx.body = '你无权访问'
    }else{
      await next()
    }
  }
}