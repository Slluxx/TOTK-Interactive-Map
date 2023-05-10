function getStables() {
    return L.layerGroup(
        [
            L.marker(window.rc.unproject([17258,14843]))
        ]
    ).addTo(rc.map);
}