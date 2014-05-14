define([
  'esri/map',
  'esri/dijit/Geocoder',
  'esri/dijit/Measurement',
  'esri/units',
  'dojo/domReady!'
], function(Map, Geocoder, Measurement, Units) {

<<<<<<< HEAD
  console.log(Backbone,_,$);

=======
>>>>>>> a7ad1644affc90b594920f9d1cc6b67001509d9f
  var map = new Map('map', {
    center: [-56.049, 38.485],
    zoom: 3,
    basemap: 'streets'
  });

  var geocoder = new Geocoder({ autoComplete: true, map: map }, 'search');
  geocoder.startup();

  var measurement = new Measurement({
    map: map,
    defaultAreaUnit: Units.SQUARE_KILOMETERS,
    defaultLengthUnit: Units.KILOMETERS
  }, 'measurement');
  measurement.startup();

});
