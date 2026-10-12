var wms_layers = [];

var lyr_OPM100_2025_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OPM100_2025<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OPM100_2025_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12662778.092838, 2520677.038460, 12747368.359726, 2586698.430168]
        })
    });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
cluster__1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__1
});
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:cluster__1, 
                style: style__1,
                popuplayertitle: '東涌考察',
                interactive: true,
    title: '東涌考察<br />\
    <img src="styles/legend/_1_0.png" /> 沙螺灣<br />\
    <img src="styles/legend/_1_1.png" /> 赤鱲角南路<br />\
    <img src="styles/legend/_1_2.png" /> 逸東邨及滿東邨<br />\
    <img src="styles/legend/_1_3.png" /> 鱟殼灣<br />\
    <img src="styles/legend/_1_4.png" /> <br />' });

lyr_OPM100_2025_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OPM100_2025_0,lyr__1];
lyr__1.set('fieldAliases', {'photo_no': 'photo_no', 'box_no': 'box_no', 'file_name': 'file_name', 'capture_date': 'capture_date', 'photo_path': 'photo_path', 'keycode': 'keycode', 'notes': 'notes', 'photographer': 'photographer', 'handler': 'handler', 'Sorting_date': 'Sorting_date', 'photo_subject': 'photo_subject', 'place_name': 'place_name', 'direction': 'direction', 'latitude': 'latitude', 'longitude': 'longitude', 'location_precision': 'location_precision', 'location_source': 'location_source', 'location_note': 'location_note', 'cleaning': 'cleaning', });
lyr__1.set('fieldImages', {'photo_no': 'TextEdit', 'box_no': 'TextEdit', 'file_name': 'TextEdit', 'capture_date': 'TextEdit', 'photo_path': 'ExternalResource', 'keycode': 'Range', 'notes': 'TextEdit', 'photographer': 'TextEdit', 'handler': 'TextEdit', 'Sorting_date': 'TextEdit', 'photo_subject': 'TextEdit', 'place_name': 'TextEdit', 'direction': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'location_precision': 'TextEdit', 'location_source': 'TextEdit', 'location_note': 'TextEdit', 'cleaning': 'TextEdit', });
lyr__1.set('fieldLabels', {'photo_no': 'no label', 'box_no': 'no label', 'file_name': 'no label', 'capture_date': 'no label', 'photo_path': 'header label - visible with data', 'keycode': 'no label', 'notes': 'no label', 'photographer': 'no label', 'handler': 'no label', 'Sorting_date': 'no label', 'photo_subject': 'no label', 'place_name': 'no label', 'direction': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'location_precision': 'no label', 'location_source': 'no label', 'location_note': 'no label', 'cleaning': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});