document.addEventListener('DOMContentLoaded', function() {

  var summonKittiesButton = document.querySelector('.summon-cats');

  summonKittiesButton.addEventListener('click', function() {
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'json',
      // crossDomain: true
      // headers: 'Access-Control-Allow-Origin:*'

    }).fail(function() {
      console.log("FAILED");
      // var img = document.createElement('img');
      // console.log(img);


    }).done(function(responseData) {
      var cats = responseData.cats;

      cats.forEach(function(cat, index) {
        var img = document.createElement('img');
        img.src = cat.photo;
        img.alt = "Photo of " + cat.name;

        document.querySelector('#cat' + (index + 1)).innerHTML = img.outerHTML;

      })
    })
  });





})
