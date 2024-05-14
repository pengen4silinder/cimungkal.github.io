var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelit_1 = new ol.layer.Tile({
            'title': 'Satelit',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BatasDusun_2 = new ol.format.GeoJSON();
var features_BatasDusun_2 = format_BatasDusun_2.readFeatures(json_BatasDusun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDusun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDusun_2.addFeatures(features_BatasDusun_2);
var lyr_BatasDusun_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDusun_2, 
                style: style_BatasDusun_2,
                popuplayertitle: "Batas Dusun",
                interactive: true,
    title: 'Batas Dusun<br />\
    <img src="styles/legend/BatasDusun_2_0.png" /> Dusun Ciledug<br />\
    <img src="styles/legend/BatasDusun_2_1.png" /> Dusun Cimungkal<br />\
    <img src="styles/legend/BatasDusun_2_2.png" /> Dusun Margaluyu<br />\
    <img src="styles/legend/BatasDusun_2_3.png" /> Dusun Sukamanah<br />\
    <img src="styles/legend/BatasDusun_2_4.png" /> Hutan Cakra Buana<br />\
    <img src="styles/legend/BatasDusun_2_5.png" /> <br />'
        });
var format_BatasRW_3 = new ol.format.GeoJSON();
var features_BatasRW_3 = format_BatasRW_3.readFeatures(json_BatasRW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRW_3.addFeatures(features_BatasRW_3);
var lyr_BatasRW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRW_3, 
                style: style_BatasRW_3,
                popuplayertitle: "Batas RW",
                interactive: true,
    title: 'Batas RW<br />\
    <img src="styles/legend/BatasRW_3_0.png" /> RW 01<br />\
    <img src="styles/legend/BatasRW_3_1.png" /> RW 02<br />\
    <img src="styles/legend/BatasRW_3_2.png" /> RW 03<br />\
    <img src="styles/legend/BatasRW_3_3.png" /> RW 04<br />\
    <img src="styles/legend/BatasRW_3_4.png" /> RW 05<br />\
    <img src="styles/legend/BatasRW_3_5.png" /> RW 06<br />\
    <img src="styles/legend/BatasRW_3_6.png" /> RW 07<br />\
    <img src="styles/legend/BatasRW_3_7.png" /> RW 08<br />\
    <img src="styles/legend/BatasRW_3_8.png" /> <br />'
        });
var format_StrukturJalan_4 = new ol.format.GeoJSON();
var features_StrukturJalan_4 = format_StrukturJalan_4.readFeatures(json_StrukturJalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturJalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrukturJalan_4.addFeatures(features_StrukturJalan_4);
var lyr_StrukturJalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrukturJalan_4, 
                style: style_StrukturJalan_4,
                popuplayertitle: "Struktur Jalan",
                interactive: true,
    title: 'Struktur Jalan<br />\
    <img src="styles/legend/StrukturJalan_4_0.png" /> Jalan Lain<br />\
    <img src="styles/legend/StrukturJalan_4_1.png" /> Jalan Lain Rencana<br />\
    <img src="styles/legend/StrukturJalan_4_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/StrukturJalan_4_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/StrukturJalan_4_4.png" /> <br />'
        });
var format_Struktur_5 = new ol.format.GeoJSON();
var features_Struktur_5 = format_Struktur_5.readFeatures(json_Struktur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Struktur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Struktur_5.addFeatures(features_Struktur_5);
var lyr_Struktur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Struktur_5, 
                style: style_Struktur_5,
                popuplayertitle: "Struktur",
                interactive: true,
    title: 'Struktur<br />\
    <img src="styles/legend/Struktur_5_0.png" /> Bak Penampungan Air<br />\
    <img src="styles/legend/Struktur_5_1.png" /> Embung<br />\
    <img src="styles/legend/Struktur_5_2.png" /> Mata Air<br />\
    <img src="styles/legend/Struktur_5_3.png" /> Pusat Pelayanan Desa (PPD)<br />\
    <img src="styles/legend/Struktur_5_4.png" /> Pusat Pelayanan Kampung (PPK)<br />\
    <img src="styles/legend/Struktur_5_5.png" /> SUB - Pusat Pelayanan Desa (S-PPD)<br />\
    <img src="styles/legend/Struktur_5_6.png" /> Titik Evakuasi Sementara<br />\
    <img src="styles/legend/Struktur_5_7.png" /> TPS 3R<br />'
        });
var format_PL_CMKL_6 = new ol.format.GeoJSON();
var features_PL_CMKL_6 = format_PL_CMKL_6.readFeatures(json_PL_CMKL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PL_CMKL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PL_CMKL_6.addFeatures(features_PL_CMKL_6);
var lyr_PL_CMKL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PL_CMKL_6, 
                style: style_PL_CMKL_6,
                popuplayertitle: "PL_CMKL",
                interactive: true,
    title: 'PL_CMKL<br />\
    <img src="styles/legend/PL_CMKL_6_0.png" /> Badan Air<br />\
    <img src="styles/legend/PL_CMKL_6_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/PL_CMKL_6_2.png" /> Hortikultura<br />\
    <img src="styles/legend/PL_CMKL_6_3.png" /> Hutan Produksi Tetap<br />\
    <img src="styles/legend/PL_CMKL_6_4.png" /> Hutan Produksi yang dapat Dikonversi<br />\
    <img src="styles/legend/PL_CMKL_6_5.png" /> Perkebunan<br />\
    <img src="styles/legend/PL_CMKL_6_6.png" /> Perkebunan Rakyat<br />\
    <img src="styles/legend/PL_CMKL_6_7.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/PL_CMKL_6_8.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/PL_CMKL_6_9.png" /> Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/PL_CMKL_6_10.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/PL_CMKL_6_11.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/PL_CMKL_6_12.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(false);lyr_Satelit_1.setVisible(true);lyr_BatasDusun_2.setVisible(false);lyr_BatasRW_3.setVisible(false);lyr_StrukturJalan_4.setVisible(false);lyr_Struktur_5.setVisible(false);lyr_PL_CMKL_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelit_1,lyr_BatasDusun_2,lyr_BatasRW_3,lyr_StrukturJalan_4,lyr_Struktur_5,lyr_PL_CMKL_6];
lyr_BatasDusun_2.set('fieldAliases', {'Id': 'Id', 'Dusun': 'Dusun', });
lyr_BatasRW_3.set('fieldAliases', {'Id': 'Id', 'Dusun': 'Dusun', 'RW': 'RW', });
lyr_StrukturJalan_4.set('fieldAliases', {'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Struktur_5.set('fieldAliases', {'Id': 'Id', 'Struktur': 'Struktur', 'Keterangan': 'Keterangan', });
lyr_PL_CMKL_6.set('fieldAliases', {'Id': 'Id', 'RENCANA': 'RENCANA', });
lyr_BatasDusun_2.set('fieldImages', {'Id': 'Range', 'Dusun': 'TextEdit', });
lyr_BatasRW_3.set('fieldImages', {'Id': 'Range', 'Dusun': 'TextEdit', 'RW': 'TextEdit', });
lyr_StrukturJalan_4.set('fieldImages', {'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Struktur_5.set('fieldImages', {'Id': 'Range', 'Struktur': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_PL_CMKL_6.set('fieldImages', {'Id': 'Range', 'RENCANA': 'TextEdit', });
lyr_BatasDusun_2.set('fieldLabels', {'Id': 'header label - visible with data', 'Dusun': 'inline label - visible with data', });
lyr_BatasRW_3.set('fieldLabels', {'Id': 'no label', 'Dusun': 'header label - visible with data', 'RW': 'hidden field', });
lyr_StrukturJalan_4.set('fieldLabels', {'FCODE': 'hidden field', 'REMARK': 'inline label - visible with data', 'SHAPE_LEN': 'header label - visible with data', });
lyr_Struktur_5.set('fieldLabels', {'Id': 'header label - visible with data', 'Struktur': 'header label - always visible', 'Keterangan': 'header label - visible with data', });
lyr_PL_CMKL_6.set('fieldLabels', {'Id': 'no label', 'RENCANA': 'no label', });
lyr_PL_CMKL_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});