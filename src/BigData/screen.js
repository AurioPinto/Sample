require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.805, 34.027], // longitude, latitude
    zoom: 13
  });
});

// require([
//   "esri/Map",
//   "esri/views/MapView",
//   "esri/widgets/BasemapToggle",
//   "esri/widgets/BasemapGallery"
// ], function(Map, MapView, BasemapToggle, BasemapGallery) {
//   var basemapToggle = new BasemapToggle({
//     view: view,
//     nextBasemap: "satellite"
//   });
// });
// view.ui.add(basemapToggle, "bottom-right");
