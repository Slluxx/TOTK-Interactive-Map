
let towers = [
    {
        coords: [17102, 14571],
        name: "Lookout Landing Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [15715, 18058],
        name: "Hyrule Field Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [12270, 11264],
        name: "Lindor's Brow Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [11065, 5812],
        name: "Pikida Stonegrove Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [28498, 8923],
        name: "Ulri Mountain Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [26597, 13257],
        name: "Upland Zorana Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [22925, 11428],
        name: "Eldin Canyon Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [19031, 5575],
        name: "Thyphio Ruins Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [6961, 7961],
        name: "Rospro Pass Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [10684, 21550],
        name: "Gerudo Canyon Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [19813, 21381],
        name: "Popla Foothills Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [6117, 18918],
        name: "Gerudo Highlands Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [22023, 18535],
        name: "Sahasra Slope Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [25260, 23264],
        name: "Rabella Wetlands Skyview Tower",
        text: "",
        level: "Ground"
    },
    {
        coords: [29543, 18946],
        name: "Mount Lanayru Skyview Tower",
        text: "",
        level: "Ground"
    }
]

function towerUI(object) {

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


function getTowers(level = null) {

    var korokIcon = L.icon({
        iconUrl: './assets/marker/tower_r.png',
        iconSize: [25, 25],
    });

    let layerGroupArray = [];
    for (object in towers) {
        if (towers[object].level == null || towers[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(towers[object].coords), { icon: korokIcon }).bindPopup(towerUI(towers[object])));
        }

    }

    return L.layerGroup(
        layerGroupArray
    );
}