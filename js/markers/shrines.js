let shrines = [
    {
        coords: [16338, 16798],
        name: "Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [17367,13623],
        name: "Shrine",
        text: "",
        level: "Ground"
    }
]

function shrineUI(object){
    object = shrines[object];

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
        </h5>
    </div>
    `
    return markerHtml;
}

function getShrines() {
    var icon = L.icon({
        iconUrl: './assets/marker/shrine.png',
        iconSize: [22, 22],
    });

    let layerGroupArray = [];
    for (shrine in shrines) {
        layerGroupArray.push(L.marker(window.rc.unproject(shrines[shrine].coords), { icon: icon }).bindPopup(shrineUI(shrine)));
    }

    return L.layerGroup(
        layerGroupArray
    ).addTo(rc.map);
}