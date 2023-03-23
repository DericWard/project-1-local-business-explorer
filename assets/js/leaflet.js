function plotMap() {

    // console.log(`mylat: ${myLat} mylon: ${myLon}`);
    // console.log(resultsArray);

    let map = L.map('map').setView([51.4665307, -0.0462483], 15);

    // for (let i = 0; i < resultsArray.length; i++) {
    //     const lat = resultsArray[i].location[0];
    //     const lon = resultsArray[i].location[1];
    //     const pinName = resultsArray[i].name;
    //     const postcode = resultsArray[i].address.postcode;
    //     const marker = L.marker([lat, lon], { 'title': pinName }).addTo(map);
    //     marker.bindPopup(`${pinName} ${postcode}`);
    // };

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

};

plotMap();
