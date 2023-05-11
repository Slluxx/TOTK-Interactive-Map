
let dispensers = [
    {
        coords: [20312,18785],
        name: "Device Dispenser",
        text: "Flame Emitter</br>Wing</br>Fan</br>Portable Pot</br>",
        level: "Sky"
    }
]

function ddUI(object) {

    let markerHtml = `
    <div>
        <h5>
            <a href="${location.protocol}//${location.host}${location.pathname}?z=${window.map.getMaxZoom()}&x=${object.coords[0]}&y=${object.coords[1]}">
            ${object.name}
            </a>
        </h5>
        <p>
            Level: ${object.level}</br>
            Location: ${object.coords[0]},${object.coords[1]}
        </p>
        <p>${object.text}</p>
    </div>
    `
    return markerHtml;
}


function getDeviceDispenser(level = null) {

    var icon = L.icon({
        iconUrl: './assets/marker/recycle_r.png',
        iconSize: [30, 30],
    });

    let layerGroupArray = [];
    for (object in dispensers) {
        if (dispensers[object].level == null || dispensers[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(dispensers[object].coords), { icon: icon }).bindPopup(ddUI(dispensers[object])));
        }
    }

    return L.layerGroup(
        layerGroupArray
    );
}