'use strict';

const Controller = require('egg').Controller;
class NewsController extends Controller {
  async index() {
    this.ctx.logger.info('this.app.config.env',this.app.config.env)
    let items = await this.service.news.list()
    await this.ctx.render('news.html',{items})
  }
}

module.exports = NewsController;