

let favourites = getStoredResults();

console.log(favourites);

favourites.forEach(function (element) {

    let cardName = element.name;
    let cardAddress = element.address.formatted_address;
    let cardCategory = element.category;

    let li = $("<li>");

    $('#favouritesContainer').append(li);

    let card = $("<div>")
    card.addClass("card mb-3 favourites-card");
    li.append(card);

    let removeButton = $('<button>');
    removeButton.attr('type', 'button');
    removeButton.addClass('favouritedIcon card-header');
    card.append(removeButton);

    let i = $('<i>');
    i.addClass('fas fa-heart');
    removeButton.append(i);

    card.append(` 
    <div class="card-body">
<h5 class="card-title">${cardName}</h5>
<p class="card-text">Address: ${cardAddress}</p>
<p class="card-category">Category: ${cardCategory}</p>
</div>
`);

    removeButton.on('click', function () {

        let storageValue = getStoredResults();

        // filter through arrray and find the business name we want to remove
        let removePlace = storageValue.filter(function (storedElement) {
            return storedElement.name !== element.name;
        })

        // removePlace is string without the unfavourited place
        if (removePlace) {
            // set new string to local storage
            localStorage.setItem('favouritePlaces', JSON.stringify(removePlace));
            // remove the item card 
            li.remove();
        }

    })
})


$('#clearAll').on('click', function () {

    $('#favouritesContainer').remove();

    localStorage.clear();

})
