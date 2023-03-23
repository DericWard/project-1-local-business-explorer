let myLat;
let myLon;

$("#near-button").on("click", function () {
  searchString = $("#search-input").val();
  findMe(searchString);
});

function findMe(searchString) {

    navigator.geolocation.getCurrentPosition((position) => {

        myLat = position.coords.latitude;
        myLon = position.coords.longitude;

      console.log("in followMe just before performSearch call", myLat, myLon);

        performSearch(searchString, myLat, myLon);
                
    });
};
