function setMouseClickMarkerEvent() {
    // set markers on click events in the map
    map.on('click', function (event) {

        if (window.mouseMarker != null) window.mouseMarker.remove()

        // any position in leaflet needs to be projected to obtain the image coordinates
        var coords = rc.project(event.latlng)
        window.mouseMarker = L.marker(rc.unproject(coords), {
            draggable: true,
            autoPan: true
        }).addTo(map)
        window.mouseMarker.bindPopup('[' + Math.floor(coords.x) + ',' + Math.floor(coords.y) + ']').openPopup()
    })
}