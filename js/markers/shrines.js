function getShrines() {
    return L.layerGroup(
        [
            L.marker(window.rc.unproject([17580,13623]))
        ]
    ).addTo(rc.map);
}