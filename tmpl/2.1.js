let nunjucks=require('nunjucks');
const path=require('path');
nunjucks.configure(path.resolve(__dirname,'views'),{autoescape:true});
let ret2 = nunjucks.render('index.html',{name: 'zfpx'});
console.log(ret2);