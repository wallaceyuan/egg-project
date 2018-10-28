module.exports = (option,app)=>{
  return async function(ctx,next){
    const start = Date.now()
    await next();
    console.log(`本次请求花费了 ${option.name}`,Date.now()- start,'ms')
  }
}