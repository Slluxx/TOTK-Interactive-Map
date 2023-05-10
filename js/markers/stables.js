let stables = [
    {
        coords: [17260, 14834],
        name: "Mini Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [19016,18285],
        name: "Riverside Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [13914,12827],
        name: "New Serenne Stable",
        text: "",
        level: "Ground"
    }
]

function stableUI(object) {
    object = stables[object];

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

function getStables() {
    var icon = L.icon({
        iconUrl: './assets/marker/stable.png',
        iconSize: [22, 22],
    });

    let layerGroupArray = [];
    for (stable in stables) {
        layerGroupArray.push(L.marker(window.rc.unproject(stables[stable].coords), { icon: icon }).bindPopup(stableUI(stable)));
    }

    return L.layerGroup(
        layerGroupArray
    );
}