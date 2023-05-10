
let seeds = [
    {
        coords: [15335,20731],
        text: "Lift the rock on the platform.",
        level: "Ground"
    }
]

function korokUI(object){
    object = seeds[object];

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


function getKorokSeeds() {

    var korokIcon = L.icon({
        iconUrl: './assets/marker/korokseed.png',
        iconSize: [35, 35],
    });

    let layerGroupArray = [];
    for (seed in seeds) {
        layerGroupArray.push(L.marker(window.rc.unproject(seeds[seed].coords), { icon: korokIcon }).bindPopup(korokUI(seed)));
    }

    return L.layerGroup(
        layerGroupArray
    );
}