function setMouseClickMarkerEvent() {
    // set markers on click events in the map
    map.on('click', function (event) {
        if (window.mouseMarker != null) window.mouseMarker.remove()
        generateMarker(event);
    })
}

function generateMarker(event){
    

    var zoom = window.map.getZoom();
    var center = window.map.getCenter();
    var pxcoords = window.rc.project([center.lat, center.lng])

    // any position in leaflet needs to be projected to obtain the image coordinates
    var coords = rc.project(event.latlng || event.target._latlng)
    window.mouseMarker = L.marker(rc.unproject(coords), {
        draggable: true,
        autoPan: true
    }).addTo(map)

    let html = `<a href="${location.protocol}//${location.host}${location.pathname}?z=${zoom}&x=${coords.x}&y=${coords.y}">Marker</a></br>
    [${Math.floor(coords.x)},${Math.floor(coords.y)}]
    `

    window.mouseMarker.bindPopup(html).openPopup()

    window.mouseMarker.on("dragend", function(event){
        if (window.mouseMarker != null) window.mouseMarker.remove()
        generateMarker(event);
    })

    /*
    might be generating a ton of eventlisteners
    window.map.on("zoomend", function(event){
        //var pxcoords = window.rc.project([._latlng.lat, window.mouseMarker._latlng.lat.lng])
        if (window.mouseMarker != null) window.mouseMarker.remove()
        generateMarker({latlng: window.mouseMarker._latlng});
    })
    */
}