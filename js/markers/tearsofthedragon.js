let TearOfTheDragon = [
    {
        coords: [13761,12093],
        name: "Where Am I?",
        text: "Tear of the Dragon #1",
        level: "Ground"
    },
    {
        coords: [23484,12785],
        name: "Mineru's Counsel",
        text: "Tear of the Dragon #3",
        level: "Ground"
    },
    {
        coords: [31393,15922],
        name: "The Sages' Vow",
        text: "Tear of the Dragon #9",
        level: "Ground"
    },
    
]

function TearOfTheDragonUI(object) {
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

function getTearOfTheDragon(level = null) {
    var icon = L.icon({
        iconUrl: './assets/marker/tear_r.png',
        iconSize: [25, 25],
    });

    let layerGroupArray = [];
    for (object in TearOfTheDragon) {
        if (TearOfTheDragon[object].level == null || TearOfTheDragon[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(TearOfTheDragon[object].coords), { icon: icon }).bindPopup(TearOfTheDragonUI(TearOfTheDragon[object])));
        }
    }

    return L.layerGroup(
        layerGroupArray
    );
}