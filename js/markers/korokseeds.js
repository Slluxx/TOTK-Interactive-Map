
let seeds = [
    {
        coords: [15335, 20731],
        text: "Lift the rock on the platform.",
        level: "Ground"
    }
]

function korokUI(object) {

    let markerHtml = `
    <div>
        <h5>
            <a href="${location.protocol}//${location.host}${location.pathname}?z=${window.map.getMaxZoom()}&x=${object.coords[0]}&y=${object.coords[1]}">
            Korok Seed
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


function getKorokSeeds(level = null) {

    var korokIcon = L.icon({
        iconUrl: './assets/marker/korokseed.png',
        iconSize: [35, 35],
    });

    let layerGroupArray = [];
    for (object in seeds) {
        if (seeds[object].level == null || seeds[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(seeds[object].coords), { icon: korokIcon }).bindPopup(korokUI(seeds[object])));
        }
    }

    return L.layerGroup(
        layerGroupArray
    );
}