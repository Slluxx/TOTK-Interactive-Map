let FairyFountains = [
    {
        coords: [20748,10843],
        name: "Great Fairy Fountain",
        text: "Great Fairy Tera",
        level: "Ground"
    },
    {
        coords: [13336,18692],
        name: "Great Fairy Fountain",
        text: "Great Fairy XX",
        level: "Ground"
    },
    {
        coords: [23305,21543],
        name: "Great Fairy Fountain",
        text: "Great Fairy Cotera",
        level: "Ground"
    },
    {
        coords: [13628,6031],
        name: "Great Fairy Fountain",
        text: "Great Fairy XX",
        level: "Ground"
    },

    
]

function FairyFountainsUI(object) {
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

function getFairyFountains(level = null) {
    var icon = L.icon({
        iconUrl: './assets/marker/fountain_r.png',
        iconSize: [25, 25],
    });

    let layerGroupArray = [];
    for (object in FairyFountains) {
        if (FairyFountains[object].level == null || FairyFountains[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(FairyFountains[object].coords), { icon: icon }).bindPopup(FairyFountainsUI(FairyFountains[object])));
        }
    }

    return L.layerGroup(
        layerGroupArray
    );
}