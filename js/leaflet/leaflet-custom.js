function leafletInit() {
    var img = [
        36000,  // original width of image
        30000   // original height of image
    ]
    // create the map
    window.map = L.map('map', {
        crs: L.CRS.Simple,
    })

    // assign map and image dimensions
    window.rc = new L.RasterCoords(map, img)
    // set max zoom Level (might be `x` if gdal2tiles was called with `-z 0-x` option)
    window.map.setMaxZoom(window.rc.zoomLevel())
    // all coordinates need to be unprojected using the `unproject` method
    // set the view in the lower right edge of the image
    window.map.setView(window.rc.unproject([img[0]/2, img[1]/2]), 4)

    // set markers on click events in the map
    setMouseClickMarkerEvent();

    let url = "https://raw.githubusercontent.com/Slluxx/TOTK-Interactive-Map/tiles/assets/tiles"


    let groundMap = L.tileLayer(url+'/groundtiles/{z}/{x}/{y}.png', {
        noWrap: true,
        bounds: window.rc.getMaxBounds(),
        maxNativeZoom: window.rc.zoomLevel(),
    }).addTo(window.map);

    let skyMap = L.tileLayer(url+'/skytiles/{z}/{x}/{y}.png', {
        noWrap: true,
        bounds: window.rc.getMaxBounds(),
        maxNativeZoom: window.rc.zoomLevel(),
    });

    let undergroundMap = L.tileLayer(url+'/undergroundtiles/{z}/{x}/{y}.png', {
        noWrap: true,
        bounds: window.rc.getMaxBounds(),
        maxNativeZoom: window.rc.zoomLevel(),
    });

    var overlayMaps = {
        "Korok Seed": getKorokSeeds(),
        "Stable": getStables(),
        "Shrine": getShrines(),
    };

    var baseMaps = {
        "Sky": skyMap,
        "Ground": groundMap,
        "Underground": undergroundMap
    };

    var layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(window.map);

    window.map.on('zoomed', function () {
        var newzoom = '' + (1 * (window.map.getZoom())) + 'px';
        document.getElementsByClassName("leaflet-marker-icon").forEach(element => {
            element.style.width = newzoom;
            element.style.height = newzoom;
        });
    });
}