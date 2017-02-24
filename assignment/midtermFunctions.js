/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
/*Notes...
Data Source: Outdoor Advertising Dataset for Philadlephia
GeoJSON SOURCE: http://data.phl.opendata.arcgis.com/datasets/5eb34bd14d3e4cc996168a1a1c026e0e_0.geojson
Data Fields (An Example):
      FORMAT: STATIC
      LOCATION_DESCRIPTION: G ST ES 25FT S/O BRISTOL ST F/S - 1
      GOOD_COND_INSP: YES
      OBJECTID: 1067
      ZONING_PERMIT: 29931
      GLOBALID: eb5b2163-5a34-48f2-b2d8-b33ca340510b
      AD_TYPE: R 3
      LONGITUDE: -75.109
      HEIGHT: 37'5"
      LATITUDE: 39.9912
      FACES: 1
      Y: 39.991200000003197
      COLUMNS: null
      LAST_INSP_DATE: 2015-07-01T00:00:00
      GOOD_COND_OWNER: YES
      BUILDING_PERMIT: 146198
      ADDRESS: 4301 G ST
      OWNER: CLEAR CHANNEL OUTDOOR
      PROPERTY_LOCATION: 002407 \ 097369
      _id: 67
      AD_AREA: 300

Would be nice to be able to sort by the condition, size of advertising, type of store, type of building zoning (if applicable).

Ideally I would also join the dataset to a shapefile of commercial corridors and possibly business data to uncover
the type of building (i.e. likely mostly corner stores) at which advertising is occuring.
*/

// Step 1: Parse & store data (seperate the x & y coordinates)
var parseStoreDataFnx = function(JsonFile) {
  // ...
  // return = a clean object
};

// Step 2: Make and add markers to the map
var markersFnx = function(objectOfParsedData) {
  // ...
  // return = objectOfParsedData.markers
};

// Step 3: Apply filter to map
//create global variables first
var gatherUserInfo = function() {
  // return values for global variables
};
var applyXXXXFilter = function() {};

// Step 4: Allow user to examine summary statistics for a neighborhood (i.e. volume of advertising, average size,
// most frequent advertising owner, etc.)
// var ????? = function() {}; somehow I need to summarize based on a spatial join?? I'm a bit confused about how to do this...
