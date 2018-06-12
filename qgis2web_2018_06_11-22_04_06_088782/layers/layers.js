var wms_layers = [];
var lyr_Cortadomscara_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cortado (máscara)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Cortadomscara_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8418022.905695, 550441.637274, -8416015.156577, 554633.149344]
                            })
                        });var format_ViasAbastos_mcb_1 = new ol.format.GeoJSON();
var features_ViasAbastos_mcb_1 = format_ViasAbastos_mcb_1.readFeatures(json_ViasAbastos_mcb_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasAbastos_mcb_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ViasAbastos_mcb_1.addFeatures(features_ViasAbastos_mcb_1);var lyr_ViasAbastos_mcb_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViasAbastos_mcb_1, 
                style: style_ViasAbastos_mcb_1,
    title: 'ViasAbastos_mcb<br />\
    <img src="styles/legend/ViasAbastos_mcb_1_0.png" /> D<br />\
    <img src="styles/legend/ViasAbastos_mcb_1_1.png" /> P<br />\
    <img src="styles/legend/ViasAbastos_mcb_1_2.png" /> <br />'
        });var format_MarcoTresEsquinas_2 = new ol.format.GeoJSON();
var features_MarcoTresEsquinas_2 = format_MarcoTresEsquinas_2.readFeatures(json_MarcoTresEsquinas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MarcoTresEsquinas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MarcoTresEsquinas_2.addFeatures(features_MarcoTresEsquinas_2);var lyr_MarcoTresEsquinas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MarcoTresEsquinas_2, 
                style: style_MarcoTresEsquinas_2,
                title: '<img src="styles/legend/MarcoTresEsquinas_2.png" /> MarcoTresEsquinas'
            });

lyr_ViasAbastos_mcb_1.setVisible(true);lyr_MarcoTresEsquinas_2.setVisible(true);
var layersList = [lyr_Cortadomscara_0,lyr_ViasAbastos_mcb_1,lyr_MarcoTresEsquinas_2];
lyr_ViasAbastos_mcb_1.set('fieldAliases', {'Id': 'Id', 'TIPO': 'TIPO', });
lyr_MarcoTresEsquinas_2.set('fieldAliases', {'Name': 'Name', });
lyr_ViasAbastos_mcb_1.set('fieldImages', {'Id': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_MarcoTresEsquinas_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_ViasAbastos_mcb_1.set('fieldLabels', {'Id': 'no label', 'TIPO': 'no label', });
lyr_MarcoTresEsquinas_2.set('fieldLabels', {'Name': 'no label', });
lyr_MarcoTresEsquinas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});