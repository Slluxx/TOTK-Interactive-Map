let shrines = [
    {
        coords: [17367,13623],
        name: "Kjonnisiu Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [19009,13604],
        name: "Ojami'o Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [17283,16130],
        name: "Djiosinih Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [15651,16284],
        name: "Zuzuyaj Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [15360,13734],
        name: "Ishodgun Shrine",
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
    );
}