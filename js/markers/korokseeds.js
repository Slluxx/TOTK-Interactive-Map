function getKorokSeeds() {

    var korokIcon = L.icon({
        iconUrl: './assets/marker/korokseed.png',
        // shadowUrl: 'leaf-shadow.png',
        iconSize:     [35, 35], // size of the icon
        //shadowSize:   [50, 64], // size of the shadow
        //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        //shadowAnchor: [4, 62],  // the same for the shadow
        //popupAnchor:  [0, -3] // point from which the popup should open relative to the iconAnchor
    });

    return L.layerGroup(
        [
            L.marker(window.rc.unproject([15334,20728]), { icon: korokIcon })
        ]
    ).addTo(rc.map);
}