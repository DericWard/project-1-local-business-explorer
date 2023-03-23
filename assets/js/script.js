function showResultsPage() {
    $("#jumbotron").hide();
    $("#results-page").show();
    $(".search-bar").show();
    $(".searchIcon").removeAttr("hidden");
}

$("#search-button").click(function () {
    showResultsPage()
});

function getStoredResults() {
    let storageValueString = localStorage.getItem('favouritePlaces');
    let storageValue;
    if (storageValueString === null) {
        storageValue = [];
    } else {
        storageValue = JSON.parse(storageValueString);
    }
    return storageValue;
}

function generateCards(resultsArray) {

    resultsArray.forEach(function (element) {

        let cardName = element.name;
        let cardAddress = element.address.formatted_address;
        let cardCategory = element.category;

        let li = $("<li>");
        $('#cardList').append(li);

        let card = $("<div>")
        card.addClass("card mb-3");
        li.append(card);

        let button = $('<button>');
        button.attr('type', 'button');
        button.addClass('addFavouriteIcon card-header');
        card.append(button);

        let i = $('<i>');
        i.addClass('far fa-heart');
        button.append(i);

        card.append(` 
        <div class="card-body">
<h5 class="card-title">${cardName}</h5>
<p class="card-text">Address: ${cardAddress}</p>
<p class="card-category">Category: ${cardCategory}</p>
</div>
`);

        button.on('click', function () {

            let storageValue = getStoredResults();
            // if already favourited dont save to local storage again
            let doesContainElement = storageValue.some(function (storedElement) {
                return storedElement.name === element.name;
            })
            // if it is already stored return
            if (doesContainElement) {
                return;
            }
            // push item to array
            storageValue.push(element);
            // save to local storage 
            localStorage.setItem('favouritePlaces', JSON.stringify(storageValue));

        })


    })
}
