'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(){
    let newsUrl = this.config.news.newsListUrl
    const result = await this.ctx.curl(newsUrl,{
      method:'GET',
      dataType:'json'
    })
    let items = result.data.data //data是响应体
    return items
  }
}

module.exports = NewsService;
