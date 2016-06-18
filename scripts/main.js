$(document).ready(function () {
  var source = $('#index-template').html();
  var template = Handlebars.compile(source);
  Handlebars.registerPartial('index', document.getElementById('index-partial').innerHTML);
  Handlebars.registerPartial('nav', document.getElementById('nav-partial').innerHTML);
  $(document.body).append(template());
});
