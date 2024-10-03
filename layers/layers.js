var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_points_layer_supply_1 = new ol.format.GeoJSON();
var features_points_layer_supply_1 = format_points_layer_supply_1.readFeatures(json_points_layer_supply_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_layer_supply_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_layer_supply_1.addFeatures(features_points_layer_supply_1);
var lyr_points_layer_supply_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_layer_supply_1, 
                style: style_points_layer_supply_1,
                popuplayertitle: "points_layer_supply",
                interactive: true,
                title: '<img src="styles/legend/points_layer_supply_1.png" /> points_layer_supply'
            });
var format_supply_b250m_allroute_2 = new ol.format.GeoJSON();
var features_supply_b250m_allroute_2 = format_supply_b250m_allroute_2.readFeatures(json_supply_b250m_allroute_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supply_b250m_allroute_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supply_b250m_allroute_2.addFeatures(features_supply_b250m_allroute_2);
var lyr_supply_b250m_allroute_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_supply_b250m_allroute_2, 
                style: style_supply_b250m_allroute_2,
                popuplayertitle: "supply_b250m_allroute",
                interactive: true,
    title: 'supply_b250m_allroute<br />\
    <img src="styles/legend/supply_b250m_allroute_2_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/supply_b250m_allroute_2_1.png" /> 0,5 - 2,5<br />\
    <img src="styles/legend/supply_b250m_allroute_2_2.png" /> 2,5 - 5,7<br />\
    <img src="styles/legend/supply_b250m_allroute_2_3.png" /> 5,7 - 45<br />\
    <img src="styles/legend/supply_b250m_allroute_2_4.png" /> 45 - 450<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_points_layer_supply_1.setVisible(true);lyr_supply_b250m_allroute_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_points_layer_supply_1,lyr_supply_b250m_allroute_2];
lyr_points_layer_supply_1.set('fieldAliases', {'fid': 'fid', });
lyr_supply_b250m_allroute_2.set('fieldAliases', {'fid': 'fid', 'value': 'value', });
lyr_points_layer_supply_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_supply_b250m_allroute_2.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', });
lyr_points_layer_supply_1.set('fieldLabels', {'fid': 'no label', });
lyr_supply_b250m_allroute_2.set('fieldLabels', {'fid': 'no label', 'value': 'no label', });
lyr_supply_b250m_allroute_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});