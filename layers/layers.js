var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Reguleringsplanarforendringoppheving_1 = new ol.format.GeoJSON();
var features_Reguleringsplanarforendringoppheving_1 = format_Reguleringsplanarforendringoppheving_1.readFeatures(json_Reguleringsplanarforendringoppheving_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reguleringsplanarforendringoppheving_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reguleringsplanarforendringoppheving_1.addFeatures(features_Reguleringsplanarforendringoppheving_1);
var lyr_Reguleringsplanarforendringoppheving_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reguleringsplanarforendringoppheving_1, 
                style: style_Reguleringsplanarforendringoppheving_1,
                popuplayertitle: 'Reguleringsplanar for endring/oppheving',
                interactive: true,
                title: '<img src="styles/legend/Reguleringsplanarforendringoppheving_1.png" /> Reguleringsplanar for endring/oppheving'
            });
var format_ReguleringsplanarforendringutankonsekvensarforKPA_2 = new ol.format.GeoJSON();
var features_ReguleringsplanarforendringutankonsekvensarforKPA_2 = format_ReguleringsplanarforendringutankonsekvensarforKPA_2.readFeatures(json_ReguleringsplanarforendringutankonsekvensarforKPA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReguleringsplanarforendringutankonsekvensarforKPA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReguleringsplanarforendringutankonsekvensarforKPA_2.addFeatures(features_ReguleringsplanarforendringutankonsekvensarforKPA_2);
var lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReguleringsplanarforendringutankonsekvensarforKPA_2, 
                style: style_ReguleringsplanarforendringutankonsekvensarforKPA_2,
                popuplayertitle: 'Reguleringsplanar for endring utan konsekvensar for KPA',
                interactive: false,
                title: '<img src="styles/legend/ReguleringsplanarforendringutankonsekvensarforKPA_2.png" /> Reguleringsplanar for endring utan konsekvensar for KPA'
            });
var group_Oppstartavplanvask = new ol.layer.Group({
                                layers: [lyr_Reguleringsplanarforendringoppheving_1,lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2,],
                                fold: 'open',
                                title: 'Oppstart av planvask'});
var group_Allereguleringsplaner = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Alle reguleringsplaner'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'close',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_Reguleringsplanarforendringoppheving_1.setVisible(true);lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2.setVisible(true);
var layersList = [group_Openstreetmap,group_Oppstartavplanvask];
lyr_Reguleringsplanarforendringoppheving_1.set('fieldAliases', {'IKRAFT': 'IKRAFT', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'PLANNAVN': 'PLANNAVN', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'layer': 'layer', 'path': 'path', 'areal_m2': 'areal_m2', });
lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2.set('fieldAliases', {'FORSLAGSST': 'FORSLAGSST', 'FØRSTEDIG': 'FØRSTEDIG', 'IDENT_LOKA': 'IDENT_LOKA', 'IDENT_NAVN': 'IDENT_NAVN', 'IDENT_VERS': 'IDENT_VERS', 'IKRAFT': 'IKRAFT', 'KUNNGJØRI': 'KUNNGJØRI', 'LOVREFBESK': 'LOVREFBESK', 'LOVREFERAN': 'LOVREFERAN', 'NASJONALAR': 'NASJONALAR', 'NASJONAL00': 'NASJONAL00', 'PLANBEST': 'PLANBEST', 'PLANNAVN': 'PLANNAVN', 'PLANSTAT': 'PLANSTAT', 'PLANTYPE': 'PLANTYPE', 'VEDTAKENDE': 'VEDTAKENDE', 'VERTNIV': 'VERTNIV', 'fme_basena': 'fme_basena', 'fme_datase': 'fme_datase', 'AREAL': 'AREAL', });
lyr_Reguleringsplanarforendringoppheving_1.set('fieldImages', {'IKRAFT': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'PLANNAVN': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'areal_m2': '', });
lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2.set('fieldImages', {'FORSLAGSST': 'TextEdit', 'FØRSTEDIG': 'TextEdit', 'IDENT_LOKA': 'TextEdit', 'IDENT_NAVN': 'TextEdit', 'IDENT_VERS': 'TextEdit', 'IKRAFT': 'TextEdit', 'KUNNGJØRI': 'TextEdit', 'LOVREFBESK': 'TextEdit', 'LOVREFERAN': 'TextEdit', 'NASJONALAR': 'TextEdit', 'NASJONAL00': 'TextEdit', 'PLANBEST': 'TextEdit', 'PLANNAVN': 'TextEdit', 'PLANSTAT': 'TextEdit', 'PLANTYPE': 'TextEdit', 'VEDTAKENDE': 'TextEdit', 'VERTNIV': 'TextEdit', 'fme_basena': 'TextEdit', 'fme_datase': 'TextEdit', 'AREAL': 'TextEdit', });
lyr_Reguleringsplanarforendringoppheving_1.set('fieldLabels', {'IKRAFT': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'PLANNAVN': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'layer': 'header label - visible with data', 'path': 'header label - visible with data', 'areal_m2': 'header label - visible with data', });
lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2.set('fieldLabels', {'FORSLAGSST': 'header label - visible with data', 'FØRSTEDIG': 'header label - visible with data', 'IDENT_LOKA': 'header label - visible with data', 'IDENT_NAVN': 'header label - visible with data', 'IDENT_VERS': 'header label - visible with data', 'IKRAFT': 'header label - visible with data', 'KUNNGJØRI': 'header label - visible with data', 'LOVREFBESK': 'header label - visible with data', 'LOVREFERAN': 'header label - visible with data', 'NASJONALAR': 'header label - visible with data', 'NASJONAL00': 'header label - visible with data', 'PLANBEST': 'header label - visible with data', 'PLANNAVN': 'header label - visible with data', 'PLANSTAT': 'header label - visible with data', 'PLANTYPE': 'header label - visible with data', 'VEDTAKENDE': 'header label - visible with data', 'VERTNIV': 'header label - visible with data', 'fme_basena': 'header label - visible with data', 'fme_datase': 'header label - visible with data', 'AREAL': 'header label - visible with data', });
lyr_ReguleringsplanarforendringutankonsekvensarforKPA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});