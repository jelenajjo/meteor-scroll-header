Package.describe({
  summary: "Some inspiration for headers that animate when scrolling the page.",
  version: "1.0.0",
  name: "jelena:meteor-scroll-header",
  git: "https://github.com/jelenajjo/meteor-scroll-header.git"
});


Package.onUse(function (api) {
  api.use('jquery@1.0.0', 'client');

  api.addFiles('component.css', 'client');
  api.addFiles('waypoints.min.js', 'client');
  
});
