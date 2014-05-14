define([
  'esri/map',
  'esri/dijit/Geocoder',
  'esri/dijit/Measurement',
  'esri/units',
  'dojo/domReady!'
], function(Map, Geocoder, Measurement, Units) {


  console.log(Backbone,_,$);


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
