function setMouseClickMarkerEvent() {
    // set markers on click events in the map
    map.on('click', function (event) {

        if (window.mouseMarker != null) window.mouseMarker.remove()

        var zoom = window.map.getZoom();
        var center = window.map.getCenter();
        var pxcoords = window.rc.project([center.lat, center.lng])

        // any position in leaflet needs to be projected to obtain the image coordinates
        var coords = rc.project(event.latlng)
        window.mouseMarker = L.marker(rc.unproject(coords), {
            draggable: true,
            autoPan: true
        }).addTo(map)
        window.mouseMarker.bindPopup("<a href="+location.protocol + '//' + location.host + location.pathname+"?z="+zoom+"&x="+pxcoords.x+"&y="+pxcoords.y+">Marker</a>").openPopup()
    })
}