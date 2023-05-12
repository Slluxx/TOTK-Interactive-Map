
let treasures = [
    {
        coords: [25505, 23041],
        name: "Chest",
        text: "Large Crystalized Charge",
        level: "Underground"
    },
    {
        coords: [25535, 22464],
        name: "Chest",
        text: "Large Crystalized Charge",
        level: "Underground"
    }
]

function treasureUI(object) {

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


function getTreasure(level = null) {

    var icon = L.icon({
        iconUrl: './assets/marker/treasure_r.png',
        iconSize: [25, 25],
    });

    let layerGroupArray = [];
    for (object in treasures) {
        if (treasures[object].level == null || treasures[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(treasures[object].coords), { icon: icon }).bindPopup(treasureUI(treasures[object])));
        }
    }

    return L.layerGroup(
        layerGroupArray
    );
}