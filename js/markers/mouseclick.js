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

    let contributeUrl = "https://github.com/slluxx/TOTK-Interactive-Map/issues/new?title=New+Marker:&body=```%0A{%0Acoords:%20["+Math.floor(coords.x)+","+Math.floor(coords.y)+"],%0Aname:%20%22%22,%0Atext:%20%22description%22,%0Alevel:%20%22Ground/Sky/Underground%22%0A}%0A```"
    let html = `<a href="${location.protocol}//${location.host}${location.pathname}?z=${window.map.getMaxZoom()}&x=${Math.floor(coords.x)}&y=${Math.floor(coords.y)}&m=1">Marker</a></br>
    [${Math.floor(coords.x)},${Math.floor(coords.y)}]</br></br>

    <a href ="${contributeUrl}" target="_blank">Contribute</a>
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