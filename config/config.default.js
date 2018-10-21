'use strict';

module.exports = appInfo => {
  const config = {};
  config.keys = 'wallaceyuan'
  config.view = {
    //defaultExtension:'.html',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };
  config.news = {
    newsListUrl: 'https://www.easy-mock.com/mock/5b923eb2321f1076a4fc13f4/api/news',
  }
  return config;
};
