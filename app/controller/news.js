'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    let items = await this.service.news.list()
    await this.ctx.render('news.html',{items})
  }
}

module.exports = NewsController;