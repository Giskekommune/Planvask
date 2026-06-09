var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1 = new ol.format.GeoJSON();
var features_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1 = format_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.readFeatures(json_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.addFeatures(features_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1);
var lyr_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1, 
                style: style_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1,
                popuplayertitle: 'Vedtatt oppstart, ikkje varsla. Planvask utsatt til ny KPA er vedtatt.',
                interactive: true,
                title: '<img src="styles/legend/VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.png" /> Vedtatt oppstart, ikkje varsla. Planvask utsatt til ny KPA er vedtatt.'
            });
var format_Vedtattoppstartikkjevarsla_2 = new ol.format.GeoJSON();
var features_Vedtattoppstartikkjevarsla_2 = format_Vedtattoppstartikkjevarsla_2.readFeatures(json_Vedtattoppstartikkjevarsla_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vedtattoppstartikkjevarsla_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vedtattoppstartikkjevarsla_2.addFeatures(features_Vedtattoppstartikkjevarsla_2);
var lyr_Vedtattoppstartikkjevarsla_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vedtattoppstartikkjevarsla_2, 
                style: style_Vedtattoppstartikkjevarsla_2,
                popuplayertitle: 'Vedtatt oppstart, ikkje varsla',
                interactive: true,
                title: '<img src="styles/legend/Vedtattoppstartikkjevarsla_2.png" /> Vedtatt oppstart, ikkje varsla'
            });
var group_Oppstartavplanvask = new ol.layer.Group({
                                layers: [lyr_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1,lyr_Vedtattoppstartikkjevarsla_2,],
                                fold: 'open',
                                title: 'Oppstart av planvask'});
var group_Allereguleringsplaner = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Alle reguleringsplaner'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'open',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.setVisible(true);lyr_Vedtattoppstartikkjevarsla_2.setVisible(true);
var layersList = [group_Openstreetmap,group_Oppstartavplanvask];
lyr_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.set('fieldAliases', {'IKRAFT': 'IKRAFT', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'PLANNAVN': 'PLANNAVN', 'Prosess': 'Prosess', 'Endring': 'Endring', 'Status': 'Status', 'Innspel': 'Innspel', 'Lenke plan': 'Lenke plan', 'Lenke kart': 'Lenke kart', 'InnspelKPA': 'InnspelKPA', });
lyr_Vedtattoppstartikkjevarsla_2.set('fieldAliases', {'IKRAFT': 'IKRAFT', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'PLANNAVN': 'PLANNAVN', 'Prosess': 'Prosess', 'Endring': 'Endring', 'Status': 'Status', 'Innspel': 'Innspel', 'Lenke plan': 'Lenke plan', 'Lenke kart': 'Lenke kart', 'InnspelKPA': 'InnspelKPA', });
lyr_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.set('fieldImages', {'IKRAFT': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'PLANNAVN': 'TextEdit', 'Prosess': 'TextEdit', 'Endring': 'TextEdit', 'Status': 'TextEdit', 'Innspel': 'TextEdit', 'Lenke plan': 'TextEdit', 'Lenke kart': 'TextEdit', 'InnspelKPA': 'TextEdit', });
lyr_Vedtattoppstartikkjevarsla_2.set('fieldImages', {'IKRAFT': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'PLANNAVN': 'TextEdit', 'Prosess': 'TextEdit', 'Endring': 'TextEdit', 'Status': 'TextEdit', 'Innspel': 'TextEdit', 'Lenke plan': 'TextEdit', 'Lenke kart': 'TextEdit', 'InnspelKPA': 'TextEdit', });
lyr_VedtattoppstartikkjevarslaPlanvaskutsatttilnyKPAervedtatt_1.set('fieldLabels', {'IKRAFT': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'PLANNAVN': 'header label - visible with data', 'Prosess': 'header label - visible with data', 'Endring': 'header label - visible with data', 'Status': 'header label - visible with data', 'Innspel': 'header label - visible with data', 'Lenke plan': 'header label - visible with data', 'Lenke kart': 'header label - visible with data', 'InnspelKPA': 'header label - visible with data', });
lyr_Vedtattoppstartikkjevarsla_2.set('fieldLabels', {'IKRAFT': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'PLANNAVN': 'header label - visible with data', 'Prosess': 'header label - visible with data', 'Endring': 'header label - visible with data', 'Status': 'header label - visible with data', 'Innspel': 'header label - visible with data', 'Lenke plan': 'header label - visible with data', 'Lenke kart': 'header label - visible with data', 'InnspelKPA': 'header label - visible with data', });
lyr_Vedtattoppstartikkjevarsla_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});