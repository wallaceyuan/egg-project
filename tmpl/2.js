let nunjucks=require('nunjucks');
nunjucks.configure({autoescape: true});
let ret=nunjucks.renderString(`
{% if score > 90 %}
 优
{% elseif score>80 %}
 良
{% elseif score>70 %}
 中
{% elseif score >60 %}
 及格
{% else %}
 不及格
{% endif %}
`,{score:79});
console.log(ret);