$(document).ready(function() {

    function displayGifs() {

        var gif = $(this).attr("data-name");

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "a696612a7047401fa563f0dfeac9c690",
            'q': "trump",
            'begin_date': "20020101",
            'end_date': "20141231"
        });

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });
    }

    displayGifs();

});