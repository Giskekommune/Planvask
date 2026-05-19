var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reguleringsplanarforendringogoppheving_1 = new ol.format.GeoJSON();
var features_Reguleringsplanarforendringogoppheving_1 = format_Reguleringsplanarforendringogoppheving_1.readFeatures(json_Reguleringsplanarforendringogoppheving_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reguleringsplanarforendringogoppheving_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reguleringsplanarforendringogoppheving_1.addFeatures(features_Reguleringsplanarforendringogoppheving_1);
var lyr_Reguleringsplanarforendringogoppheving_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reguleringsplanarforendringogoppheving_1, 
                style: style_Reguleringsplanarforendringogoppheving_1,
                popuplayertitle: 'Reguleringsplanar for endring og oppheving',
                interactive: true,
    title: 'Reguleringsplanar for endring og oppheving<br />\
    <img src="styles/legend/Reguleringsplanarforendringogoppheving_1_0.png" /> Endre<br />\
    <img src="styles/legend/Reguleringsplanarforendringogoppheving_1_1.png" /> Oppheve<br />\
    <img src="styles/legend/Reguleringsplanarforendringogoppheving_1_2.png" /> Oppheve/Endre<br />' });
var format_UendraformliKPA_2 = new ol.format.GeoJSON();
var features_UendraformliKPA_2 = format_UendraformliKPA_2.readFeatures(json_UendraformliKPA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UendraformliKPA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UendraformliKPA_2.addFeatures(features_UendraformliKPA_2);
var lyr_UendraformliKPA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UendraformliKPA_2, 
                style: style_UendraformliKPA_2,
                popuplayertitle: 'Uendra formål i KPA',
                interactive: false,
                title: '<img src="styles/legend/UendraformliKPA_2.png" /> Uendra formål i KPA'
            });
var group_Oppstartavplanvask = new ol.layer.Group({
                                layers: [lyr_Reguleringsplanarforendringogoppheving_1,lyr_UendraformliKPA_2,],
                                fold: 'open',
                                title: 'Oppstart av planvask'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'close',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_Reguleringsplanarforendringogoppheving_1.setVisible(true);lyr_UendraformliKPA_2.setVisible(false);
var layersList = [group_Openstreetmap,group_Oppstartavplanvask];
lyr_Reguleringsplanarforendringogoppheving_1.set('fieldAliases', {'IKRAFT': 'IKRAFT', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'PLANNAVN': 'PLANNAVN', 'layer': 'layer', 'path': 'path', 'areal_m2': 'areal_m2', 'Prosess': 'Prosess', 'Endring': 'Endring', });
lyr_UendraformliKPA_2.set('fieldAliases', {'IKRAFT': 'IKRAFT', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'PLANNAVN': 'PLANNAVN', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', 'Prosess': 'Prosess', 'Endring': 'Endring', });
lyr_Reguleringsplanarforendringogoppheving_1.set('fieldImages', {'IKRAFT': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'PLANNAVN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'areal_m2': 'TextEdit', 'Prosess': 'TextEdit', 'Endring': 'TextEdit', });
lyr_UendraformliKPA_2.set('fieldImages', {'IKRAFT': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'PLANNAVN': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', 'Prosess': 'TextEdit', 'Endring': 'TextEdit', });
lyr_Reguleringsplanarforendringogoppheving_1.set('fieldLabels', {'IKRAFT': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'PLANNAVN': 'header label - visible with data', 'layer': 'header label - visible with data', 'path': 'header label - visible with data', 'areal_m2': 'header label - visible with data', 'Prosess': 'header label - visible with data', 'Endring': 'header label - visible with data', });
lyr_UendraformliKPA_2.set('fieldLabels', {'IKRAFT': 'no label', 'NASJONALAR': 'no label', 'NASJONAL00': 'no label', 'PLANNAVN': 'no label', 'fme_basena': 'no label', 'fme_datase': 'no label', 'AREAL': 'no label', 'Prosess': 'no label', 'Endring': 'no label', });
lyr_UendraformliKPA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});