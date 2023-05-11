let stables = [
    {
        coords: [17260, 14834],
        name: "Mini Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [19016, 18285],
        name: "Riverside Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [13914, 12827],
        name: "New Serenne Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [30683, 6758],
        name: "East Akkala Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [21195, 11576],
        name: "Woodland Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [9594, 21684],
        name: "Gerudo Canyon Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [9207, 13362],
        name: "Tabantha Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [13034, 7288],
        name: "Snowfield Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [20666, 15522],
        name: "Wetland Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [13651, 18813],
        name: "Outskirt Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [19587, 25354],
        name: "Highland Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [22657, 25618],
        name: "Lakeside Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [23285, 20781],
        name: "Dueling Peaks Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [25843, 11569],
        name: "Foothill Stable",
        text: "",
        level: "Ground"
    },
    {
        coords: [27449, 9929],
        name: "South Akkala Stable",
        text: "",
        level: "Ground"
    }
]

function stableUI(object) {
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

function getStables(level = null) {
    var icon = L.icon({
        iconUrl: './assets/marker/stable_r.png',
        iconSize: [25, 25],
    });

    let layerGroupArray = [];
    for (object in stables) {
        if (stables[object].level == null || stables[object].level == level) {
            layerGroupArray.push(L.marker(window.rc.unproject(stables[object].coords), { icon: icon }).bindPopup(stableUI(stables[object])));
        }
    }

    return L.layerGroup(
        layerGroupArray
    );
}