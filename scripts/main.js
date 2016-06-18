$(document).ready(function(){
  Handlebars.registerPartial("index", '{{index}}');
  var source   = $("#index-template").html();
  var template = Handlebars.compile(source);
  $(document.body).append(template());
});
