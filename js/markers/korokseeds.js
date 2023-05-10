
let seeds = [
    {
        coords: [15334, 20728],
        text: "Lift the rock on the platform.",
        level: "Ground"
    }
]

function korokUI(seed){
    seed = seeds[seed];

    container = document.createElement("div");
    header = document.createElement("h5");
    header.innerHTML = "<a href="+location.protocol + '//' + location.host + location.pathname+"?z=8&x="+seed.coords[0]+"&y="+seed.coords[1]+">Korok Seed</a> ("+seed.level+")";
    text = document.createElement("p");
    text.innerHTML = seed.text;

    container.appendChild(header);
    container.appendChild(text);
    return container;
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
    ).addTo(rc.map);
}