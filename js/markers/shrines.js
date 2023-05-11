let shrines = [
    {
        coords: [17367,13623],
        name: "Kyononis Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [19009,13604],
        name: "Yamiyo Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [17283,16130],
        name: "Jiosin Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [15651,16284],
        name: "Susuyai Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [15360,13734],
        name: "Ishodag Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [17779,18351],
        name: "Teniten Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [19023,18011],
        name: "Tajikats Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [13738,12732],
        name: "Sinakawak Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [13728,19069],
        name: "Tsutsu-um Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [10427,11492],
        name: "Runakit Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [20603,21816],
        name: "Jiukoum Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [14497,7188],
        name: "Mayausiy Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [20089,6634],
        name: "Sikukuu Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [23406,10065],
        name: "Timawak Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [25711,11246],
        name: "Kisinona Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [27911,10677],
        name: "Domizuin Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [29508,8096],
        name: "Sinatanika Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [31033,6380],
        name: "Jochi-iu Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [27911,13742],
        name: "Mogawak Shrine",
        text: "",
        level: "Ground"
    },
    {
        coords: [7031,9573],
        name: "Gatakis Shrine",
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