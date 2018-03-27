document.addEventListener('DOMContentLoaded', function() {

  var summonKittiesButton = document.querySelector('.summon-cats');
  var listOfVisitors = document.querySelector('#list-of-cats')

  summonKittiesButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {number: 5},
      dataType: 'json'

    }).fail(function() {
      console.log("FAILED");

    }).done(function(responseData) {
      var cats = responseData.cats;

      cats.forEach(function(cat, index) {
        var img = document.createElement('img');
        img.src = cat.photo;
        img.alt = "Photo of " + cat.name;

        document.querySelector('#cat' + (index + 1)).innerHTML = img.outerHTML;

        if (cat.name === "") {
          cat.name = "Jane Doe";
        } else if (cat.name === "Ray&Egon") {
          cat.name = "Ray and Egon";
        }

        console.log(cat.name);

        if (!listOfVisitors.querySelector('[data-name="' + cat.name + '"]')) { // if cat hasn't yet visited
          var catListItem = document.createElement('li');

          catListItem.dataset.name = cat.name;
          catListItem.dataset.count = 1;

          catListItem.innerText = cat.name + " x1";
          listOfVisitors.append(catListItem);

        } else if (listOfVisitors.innerHTML.includes(cat.name)) { // if cat has visited
          var catItem = listOfVisitors.querySelector('[data-name="' + cat.name + '"]'); // [data-name="name"]

          catItem.dataset.count++; // increase number of times the cat visited by 1

          var i = catItem.dataset.count;

          catItem.innerText = cat.name + " x" + i;



        }
      });
    });
  });





})
