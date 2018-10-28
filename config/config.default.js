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
    newsListUrl: 'https://easy-mock.com/mock/5bd5a5c182302f7129a27fee/example_copy/mock',
  }
  // config.logger = {
  //   level:'DEBUG'
  // }
  config.middleware = [
    'cost','robot'
  ]
  config.cost = {
    name:'yuanyuan'
  }
  config.robot = {
    ua:[
      /Chrome/
    ]
  }
  return config;
};
