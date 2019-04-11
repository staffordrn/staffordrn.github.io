var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-77.0977205, 38.9832518]),
    zoom: 17
  })
});
var marker = new ol.Feature({
geometry: new ol.geom.Point(
ol.proj.fromLonLat([-77.0977205, 38.9832518])
),
});
var vectorSource = new ol.source.Vector({
features: [marker]
});
var markerVectorLayer = new ol.layer.Vector({
source: vectorSource,
});
map.addLayer(markerVectorLayer);